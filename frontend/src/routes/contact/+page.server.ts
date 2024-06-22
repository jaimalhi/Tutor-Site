import { z } from "zod";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms/server";
import { message, setError } from "sveltekit-superforms";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types.ts";
import { sendMail } from "$lib/mail/sendMail.js";

const contactSchema = z
   .object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email, requires @ and ."),
      retypeEmail: z.string().email("Invalid email, requires @ and ."),
      message: z.string().min(2, "Message details are required"),
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

      // send contact info and request to avio email
      const subjectLine = `Contact Form Submission: ${form.data.firstName} ${form.data.lastName}`;
      try {
         const response = await sendMail(form.data.email, subjectLine, form.data.message);
         console.log("Response: " + response);
      } catch (error) {
         console.error("Error: " + error);
         // use setError to set a form-level error and display toast message
         return setError(form, "", "400");
      }
      return message(form, "Form posted successfully!");
   },
} satisfies Actions;

export const load = async () => {
   const form = await superValidate(zod(contactSchema));
   return { form };
};
