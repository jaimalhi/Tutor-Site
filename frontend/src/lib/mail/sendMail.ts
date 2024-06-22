import { building } from "$app/environment";
import { MAIL_KEY, PROD_MAIL_DOMAIN, DEV_MAIL_DOMAIN } from "$env/static/private";
import { avioEmail } from "$lib/config/links.js";

// Determine if we're building the app or running it
const mailDomain: string = building ? PROD_MAIL_DOMAIN : DEV_MAIL_DOMAIN;

// Send email using fetch
export async function sendMail(
   email: string,
   subject: string,
   textBody: string,
   htmlBody: string,
   resume?: File
) {
   const formData = new FormData();
   formData.append("from", `Avio ${avioEmail}`);
   formData.append("to", avioEmail);
   // formData.append("cc", "aviotutor@gmail.com");
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

// const response = await fetch(`https://api.mailgun.net/v3/${mailDomain}/messages`, {
//       method: "POST",
//       headers: {
//          Authorization: `Basic ${auth}`,
//       },
//       body: new URLSearchParams({
//          from: `Avio ${avioEmail}`,
//          to: avioEmail,
//          //  cc: "aviotutor@gmail.com",
//          subject: `${subject} <${email}>`,
//          html: `<h1>${subject} &lt;${email}&gt;</h1>${htmlBody}`,
//          text: `Subject: ${subject} <${email}>\n\nMessage: ${textBody}`,
//          attachment: ,
//       }),
//    });
