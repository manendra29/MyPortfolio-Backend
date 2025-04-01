import nodeMailer from "nodemailer";

export const sendEmail = async (email,message,name,subject) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const options = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_TO_MAIL,
    subject: subject,
    text:`Email:${email} ${message}`,
  };
  await transporter.sendMail(options);
};
