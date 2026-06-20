import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {

    // console.log(to);

  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    ignoreTLS: true,
        secureConnection: false,
        requiresAuth: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
//   var transporter = createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "b11dd83e508afc",
//       pass: "********ea1b"
//     }
//   });
       
 try {transporter.sendMail({
    to,
    subject,
    text,
  });
} catch(error){
    // console.log(error+"helo");
} 

};