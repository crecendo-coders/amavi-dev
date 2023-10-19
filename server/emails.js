import nodemailer from 'nodemailer'
import Email from 'email-templates'
import crypto from 'crypto'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, //587 is default for insecure
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const email = new Email({
  transport: transporter,
  send: process.env.NODE_ENV === 'production',
  preview: true,
  views: {
    root: 'src/emails',
  },
  message: { from: 'campaigns@revolt.club' },
})

export async function auditionRequest(audition) {

  await email.send({
    template: 'auditionRequest',
    locals: {
      name: audition.name,
      email: audition.email,
      phone: audition.phone,
      // text: audition.personalizedNote
      // preferredContactMethod: audition.preferredContactMethod,
    },
    message: {
      from: `Amavi Chorale <${process.env.AMAVI_EMAIL}>`,
      to: process.env.CONDUCTOR_EMAIL,
    },
  })
}

export async function auditionAccepted(audition) {
  await email.send({
    template: 'auditionAccepted',
    locals: {
      name: audition.name,
    },
    message: {
      from: `Amavi Chorale <${process.env.EMAIL}>`,
      to: audition.email,
    },
  })
}

export async function auditionReminder(audition) {
  await email.send({
    template: 'auditionReminder',
    locals: {
      name: audition.name,
      date: audition.date,
      time: audition.time,
      location: audition.location,
    },
    message: {
      from: `Amavi Chorale <${process.env.CONDUCTOR_EMAIL}>`,
      to: audition.email,
    },
  })
}

export async function auditionReceived(audition) {
  await email.send({
    template: 'auditionReceived',
    locals: {
      name: audition.name
    },
    message: {
      from: `Amavi Chorale <${process.env.EMAIL}>`,
      to: audition.email,
    },
  })
}

export async function auditionDenied(audition) {
  await email.send({
    template: 'auditionDenied',
    locals: {
      name: audition.name
    },
    message: {
      from: `Amavi Chorale <${process.env.EMAIL}>`,
      to: audition.email,
    },
  })
}
      
export async function newsletter(subscriber) {
  await email.send({
    template: 'newsletter',
    locals: {
      name: subcriber.name,
      month: name,
    },
    message: {
      from: `Amavi Chorale <${process.env.EMAIL}>`,
      to: audition.email,
      list: {
        unsubscribe: {
          url: `/unsubscribe/${emailHash}`,
          comment: 'Unsubscribe from the Amavi Newsletter',
        },
      }
    },
  })
}