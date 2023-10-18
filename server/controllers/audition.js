import nodemailer from 'nodemailer'
import previewEmail from 'preview-email'
import dotenv from 'dotenv'
dotenv.config()
import { Audition, Event } from "../model.js";
import { auditionRequest } from '../emails.js';

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
    Audition.create(req.body)
      .then((person) => {
        console.log("New person created:", val);
        auditionRequest(req.body)
        res.json(val);
      })
      .catch((error) => {
        console.error(`Unable to Add Person ${req.body}`, error);
      }).then( () => { 
        auditionRequest(req.body)
       }
      )
  },
};