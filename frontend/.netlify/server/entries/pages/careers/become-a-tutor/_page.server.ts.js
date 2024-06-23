import { z } from "zod";
import "just-clone";
import "ts-deepmerge";
import "memoize-weak";
import { s as superValidate, z as zod, f as fail, a as sendMail, b as setError, m as message } from "../../../../chunks/sendMail.js";
import "@exodus/schemasafe";
import "../../../../chunks/index.js";
import "devalue";
import "../../../../chunks/stores.js";
import "../../../../chunks/formData.js";
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email, requires @ and ."),
  retypeEmail: z.string().email("Invalid email, requires @ and ."),
  educationLevel: z.string().min(1, "Enter highest Level of Education"),
  studyFocus: z.string().min(1, "Focus of Studies are required"),
  tutoringExperience: z.string().min(2, "Describe relevant tutoring experience"),
  subjectsToTutor: z.string().min(1, "Enter the subjects you wish to tutor"),
  howDidYouHear: z.string().min(1, "Please enter how you heard about us?"),
  resumeUpload: z.instanceof(File, { message: "Resume upload is required" }).refine((f) => f.size < 2e5, "Max 200 kB upload size.")
}).refine((data) => data.email === data.retypeEmail, {
  message: "Emails don't match!",
  path: ["email"]
}).refine((data) => data.retypeEmail === data.email, {
  message: "Emails don't match!",
  path: ["retypeEmail"]
});
const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));
    console.log(form);
    if (!form.valid) {
      return fail(400, { form });
    }
    const resume = form.data.resumeUpload;
    const subjectLine = `Tutor Application: ${form.data.firstName} ${form.data.lastName}`;
    const textBody = `${form.data.firstName} ${form.data.lastName} has submitted a form to become a tutor. Here are the details: 

 Education Level: ${form.data.educationLevel} 
 Study Focus: ${form.data.studyFocus} 
 Tutoring Experience: ${form.data.tutoringExperience} 
 Subjects to Tutor: ${form.data.subjectsToTutor} 
 How did you hear about us? ${form.data.howDidYouHear}`;
    const htmlBody = `<h3>${form.data.firstName} ${form.data.lastName} has submitted a form to become a tutor. Here are the details:</h3><ul><li>Education Level: ${form.data.educationLevel}</li><li>Study Focus: ${form.data.studyFocus}</li><li>Tutoring Experience: ${form.data.tutoringExperience}</li><li>Subjects to Tutor: ${form.data.subjectsToTutor}</li><li>How did you hear about us? ${form.data.howDidYouHear}</li></ul>`;
    try {
      const response = await sendMail(form.data.email, subjectLine, textBody, htmlBody, resume);
      console.log("Response: " + response);
    } catch (error) {
      console.error("Error: " + error);
      return setError(form, "", "400");
    }
    return message(form, "Form posted successfully!");
  }
};
const load = async () => {
  const form = await superValidate(zod(contactSchema));
  return { form };
};
export {
  actions,
  load
};
