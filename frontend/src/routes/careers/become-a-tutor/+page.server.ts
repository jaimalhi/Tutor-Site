import { z } from "zod";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms/server";
import { message, setError, fail } from "sveltekit-superforms";
import type { Actions } from "./$types.ts";
import { sendMail } from "$lib/mail/sendMail.js";
import { validateToken } from "$lib/security/validateCaptcha.ts";
import { CAPTCHA_SECRET_KEY } from "$env/static/private";

const contactSchema = z
   .object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email, requires @ and ."),
      retypeEmail: z.string().email("Invalid email, requires @ and ."),
      educationLevel: z.string().min(1, "Enter highest Level of Education"),
      studyFocus: z.string().min(1, "Focus of Studies are required"),
      tutoringExperience: z.string().min(2, "Describe relevant tutoring experience"),
      subjectsToTutor: z.string().min(1, "Enter the subjects you wish to tutor"),
      howDidYouHear: z.string().min(1, "Please enter how you heard about us?"),
      resumeUpload: z
         .instanceof(File, { message: "Resume upload is required" })
         .refine((f) => f.size < 200_000, "Max 200 kB upload size."),
      captchaToken: z.string().min(1, "Captcha token is required"),
   })
   .refine((data) => data.email === data.retypeEmail, {
      message: "Emails don't match!",
      path: ["email"],
   })
   .refine((data) => data.retypeEmail === data.email, {
      message: "Emails don't match!",
      path: ["retypeEmail"],
   });

export const actions = {
   default: async ({ request }) => {
      const form = await superValidate(request, zod(contactSchema));
      console.log(form);

      if (!form.valid) {
         return fail(400, { form });
      }

      // validate the captcha
      const token = form.data.captchaToken;
      const { success, error } = await validateToken(token, CAPTCHA_SECRET_KEY);
      if (!success) {
         console.log("Captcha Error: " + error);
         return setError(form, "", `${error || "Invalid CAPTCHA"}`, { status: 408 });
      }

      // send request to avio email
      const resume = form.data.resumeUpload;
      const subjectLine = `Tutor Application: ${form.data.firstName} ${form.data.lastName}`;
      const textBody = `${form.data.firstName} ${form.data.lastName} has submitted a form to become a tutor. Here are the details: \n\n Education Level: ${form.data.educationLevel} \n Study Focus: ${form.data.studyFocus} \n Tutoring Experience: ${form.data.tutoringExperience} \n Subjects to Tutor: ${form.data.subjectsToTutor} \n How did you hear about us? ${form.data.howDidYouHear}`;
      const htmlBody = `<h3>${form.data.firstName} ${form.data.lastName} has submitted a form to become a tutor. Here are the details:</h3><ul><li>Education Level: ${form.data.educationLevel}</li><li>Study Focus: ${form.data.studyFocus}</li><li>Tutoring Experience: ${form.data.tutoringExperience}</li><li>Subjects to Tutor: ${form.data.subjectsToTutor}</li><li>How did you hear about us? ${form.data.howDidYouHear}</li></ul>`;

      try {
         const response = await sendMail(form.data.email, subjectLine, textBody, htmlBody, resume);
         console.log("Response: " + response);
         if (response === null) {
            return setError(form, "", "You can only send one application every 10 minutes", {
               status: 401,
            });
         }
      } catch (error) {
         console.error("Error: " + error);
         // set a form-level error and display toast message
         return setError(form, "", "General Form Level error", {
            status: 400,
         });
      }
      return message(form, "Form posted successfully!");
   },
} satisfies Actions;

export const load = async () => {
   const form = await superValidate(zod(contactSchema));
   return { form };
};
