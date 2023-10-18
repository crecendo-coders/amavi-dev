import nodemailer from 'nodemailer'
import previewEmail from 'preview-email'
import dotenv from 'dotenv'
dotenv.config()
import { auditionRequest } from '../emails.js';
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
      .then((audition) => {
        console.log("New person created:", audition);
        auditionRequest(audition)
        res.json(audition);
      })
      .catch((error) => {
        console.error(`Unable to Add Person ${req.body}`, error);
      }).then( () => { 
        // auditionRequest(audition)
       }
      )
  },
};