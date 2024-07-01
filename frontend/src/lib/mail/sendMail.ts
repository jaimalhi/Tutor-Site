import { DEV } from "esm-env";
import { MAIL_KEY, PROD_MAIL_DOMAIN, DEV_MAIL_DOMAIN } from "$env/static/private";
import { avioEmail } from "$lib/config/links.js";

// In-memory store for rate limiting
const rateLimitStore = new Map();

// Function to check and update rate limit
function canSendEmail(email: string) {
   const now = Date.now();
   const lastSent = rateLimitStore.get(email);

   // Check if the user has sent an email in the last 10 minutes (600000 ms)
   if (lastSent && now - lastSent < 600000) {
      return false;
   }

   // Update the store with the current timestamp
   rateLimitStore.set(email, now);
   return true;
}

// Determine if we're building the app or running it
const mailDomain: string = DEV ? DEV_MAIL_DOMAIN : PROD_MAIL_DOMAIN;
console.log("Mail Domain: " + mailDomain);

// Send email using fetch
export async function sendMail(
   email: string,
   subject: string,
   textBody: string,
   htmlBody: string,
   resume?: File
) {
   // Check rate limit
   if (!canSendEmail(email)) {
      return null;
   }

   const formData = new FormData();
   formData.append("from", `Avio ${avioEmail}`);
   formData.append("to", avioEmail);
   formData.append("cc", "aviotutor@gmail.com");
   formData.append("subject", `${subject} <${email}>`);
   formData.append("html", `<h1>${subject} &lt;${email}&gt;</h1>${htmlBody}`);
   formData.append("text", `Subject: ${subject} <${email}>\n\nMessage: ${textBody}`);

   if (resume) {
      formData.append("attachment", resume, resume.name);
   }

   const auth = Buffer.from(`api:${MAIL_KEY}`).toString("base64");
   const response = await fetch(`https://api.mailgun.net/v3/${mailDomain}/messages`, {
      method: "POST",
      headers: {
         Authorization: `Basic ${auth}`,
      },
      body: formData,
   });

   return response.text();
}
