import nodemailer from 'nodemailer'
import Email from 'email-templates'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, //587 is default for insecure
  secure: true,
  auth: {
    user: process.env.AMAVI_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const email = new Email({
  transport: transporter,
  send: process.env.ENV === 'production',
  preview: false,
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
      from: `Amavi Chorale <${process.env.AMAVI_EMAIL}>`,
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
      from: `Amavi Chorale <${process.env.AMAVI_EMAIL}>`,
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
      from: `Amavi Chorale <${process.env.AMAVI_EMAIL}>`,
      to: audition.email,
    },
  })
}
      
export async function sendEmail({ subscriber, subject, body }) {
  const url = `${process.env.DOMAIN}unsubscribe/${subscriber.emailHash}`;

  try {
    await email.send({
      template: 'newsletter',
      locals: {
        name: subscriber.name,
        body: body,
        emailHash: subscriber.emailHash,
        unsubscribeUrl: url,
      },
      message: {
        from: `Amavi Chorale <${process.env.AMAVI_EMAIL}>`,
        to: subscriber.email,
        subject: subject,
        list: {
          unsubscribe: {
            url: url,
            comment: 'Unsubscribe from the Amavi Newsletter',
          },
        },
      },
    });

    // Email sent successfully
    console.log('Email sent successfully');
  } catch (error) {
    // Handle email send error
    console.error('Email send error:', error);
  }
}