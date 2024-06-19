import { z } from "zod";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms/server";
import { message } from "sveltekit-superforms";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types.ts";

const contactSchema = z.object({
   firstName: z.string().min(1),
   lastName: z.string().min(1),
   email: z.string().email(),
   message: z.string().min(2),
});

export const actions = {
   default: async ({ request }) => {
      const form = await superValidate(request, zod(contactSchema));
      console.log(form);

      if (!form.valid) {
         // Again, return { form } and things will just work.
         return fail(400, { form });
      }

      // TODO: Do something with the validated form.data

      // Display a success status message
      return message(form, "Form posted successfully!");
   },
} satisfies Actions;

export const load = async () => {
   const form = await superValidate(zod(contactSchema));
   return { form };
};
