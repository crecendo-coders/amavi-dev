import nodemailer from 'nodemailer'
import previewEmail from 'preview-email'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, //587 is default for insecure
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const message = {
  from: {mail: "Amavi Chorale",
address: process.env.EMAIL}, // sender address
  to: "dannyjeee@yahoo.com", // list of receivers
  subject: "We have recieved your audition request ✔", // Subject line
  text: "Greetings.  Let me know when you would like to meet", // plain text body
  html: "<b>HTML</b>", // html body
}
// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  previewEmail(message).then(console.log).catch(console.error);
  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

sendMail().catch(console.error);