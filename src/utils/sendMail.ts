import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export const sendMail = async (
  destination: string,
  subject: string,
  html: string,
) => {
  const transport = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secureConnection: true,
    auth: {
      user: "arnaud.guilhamat@emovin.fr",
      pass: process.env.PASSWORD_MAIL_CONTACT,
    },
  } as SMTPTransport.Options);

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transport.verify(function (error: Error | null, success: true | undefined) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: "arnaud.guilhamat@emovin.fr",
    to: destination,
    subject: subject,
    html: html,
    //headers: []
  };

  await new Promise((resolve, reject) => {
    // send mail
    transport.sendMail(mailOptions, (err: Error | null, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  transport.close();
};
