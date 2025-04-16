import { z } from "zod";
import { zod } from "sveltekit-superforms/adapters";
import { message, setError, fail, superValidate } from "sveltekit-superforms";
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
      message: z.string().min(2, "Message details are required"),
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
      //   console.log(form);
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

      // send contact info and request to avio email
      const subjectLine = `Contact Form Submission: ${form.data.firstName} ${form.data.lastName}`;
      const textBody = form.data.message;
      const htmlBody = `<p>${form.data.message}</p>`;

      try {
         const response = await sendMail(form.data.email, subjectLine, textBody, htmlBody);
         console.log("Response: " + response);
         if (response === null) {
            return setError(form, "", "You can only send one email every 10 minutes", {
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
