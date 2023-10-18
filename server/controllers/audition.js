import nodemailer from 'nodemailer'
import previewEmail from 'preview-email'
import dotenv from 'dotenv'
dotenv.config()
import { Member, Status, Voicing } from "../model.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, //587 is default for insecure
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default {
  post: (req, res) => {
    console.log("add audition", req.body);
    Member.create(req.body)
    
      .then((val) => {
        console.log("New person created:", val);
        res.json(val);
      })
      .catch((error) => {
        console.error(`Unable to Add Person ${req.body}`, error);
      }).then(async () => { 
        const message = {
          from: {mail: "Amavi Chorale",
          address: process.env.EMAIL}, // sender address
            to: req.body.email, // list of receivers
            subject: "We have recieved your audition request ✔", // Subject line
            text: "Greetings.  Let me know when you would like to meet", // plain text body
            html: "<b>Should use a HTML formatted template</b>", // html body
          }
        previewEmail(message).then(console.log).catch(console.error)
        await transporter.sendMail(message);
       }
      )
  },
};