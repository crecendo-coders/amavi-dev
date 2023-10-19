import nodemailer from 'nodemailer'
import Email from 'email-templates'

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
      // lastName: audition.lastName,
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
      firstName: audition.firstName,
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
      firstName: audition.firstName,
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
      firstName: audition.firstName
    },
    message: {
      from: `Amavi Chorale <${process.env.EMAIL}>`,
      to: audition.email,
    },
  })
}