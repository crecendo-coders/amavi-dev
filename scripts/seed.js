import {
    Member,
    Status,
    Voicing,
    Affiliate,
    Event,
    Subscriber,
} from "./../server/model.js";
import bcrypt from "bcryptjs";

import connectToDB from "./../server/db.js";
import "dotenv/config";
const salt = bcrypt.genSaltSync(10);

const voicing = [
    {
        voicingId: 1,
        type: "Soprano I",
    },
    { voicingId: 2, type: "Soprano II" },
    { voicingId: 3, type: "Alto I" },
    { voicingId: 4, type: "Alto II" },
    { voicingId: 5, type: "Tenor I" },
    { voicingId: 6, type: "Tenor II" },
    { voicingId: 7, type: "Baritone" },
    { voicingId: 8, type: "Bass" },
];

const subscribers = [
    {
        name: "Larry",
        email: "some@examploe.com",
        emailHash: "hashedEmail4",
        phone: "123 123-123",
      },
      {
        name: "Larry",
        email: "some@examploe.com",
        emailHash: "hashedEmail3",
        phone: "123 123-123",
      },
      {
        name: "Moe",
        companyName: "Da Fed",
        email: "Moe@examploe.com",
        emailHash: "hashedEmail2",
      },
      {
        companyName: "Amazon.com",
        email: "some@example.com",
        emailHash: "hashedEmail1",
      },
];
const status = [
    {
        statusId: 0,
        type: "Not a member",
    },
    {
        statusId: 1,
        type: "Pending",
    },
    {
        statusId: 2,
        type: "Active",
    },
    {
        statusId: 3,
        type: "Inactive",
    },
];

const members = [
    {
        name: "Caleb",
        email: "admin@example.com",
        phone: "123-456-7890",
        dob: "1990-01-01",
        experience: 3,
        expDetail: "I love to sing",
        connection: "friend",
        voicingId: 1,
        statusId: 2,
    },
    {
        name: "Adam",
        email: "user@example.com",
        phone: "987-654-3210",
        dob: "1995-05-05",
        experience: 1,
        expDetail: "I love to sing",
        connection: "friend",
        voicingId: 2,
        statusId: 2,
    },
    {
        // conductor
        name: "Conductor",
        email: "conductor@example.com",
        phone: "987-654-3210",
        dob: "1990-05-05",
        experience: 6,
        expDetail: "I love to sing",
        connection: "friend",
        voicingId: 3,
        statusId: 2,
    },
    {
        name: "Larry",
        email: "some@examploe.com",
        phone: "123 123-123",
        dob: "1990-01-01",
        experience: 3,
        expDetail: "I love to sing",
        connection: "event",
        voicingId: 1,
        statusId: 1,
    },
    {
        name: "Curly",
        email: "c@examploe.com",
        phone: "123 123-123",
        dob: "1990-01-01",
        experience: 2,
        expDetail: "I love to sing",
        connection: "friend",
        voicingId: 3,
        statusId: 1,
    },
];

const affiliates = [
    {
        start_date: "2023-01-01",
        end_date: "2023-12-31",
        subscriberId: 1,
        link: "https://affiliate1.com",
        logo: "logo1.jpg",
    },
    {
        start_date: "2023-02-01",
        end_date: "2023-11-30",
        subscriberId: 2,
        link: "https://affiliate2.com",
        logo: "logo2.jpg",
    },
];

const events = [
    {
        location: "St. Mark's Cathedral",
        image: "https://amaviphotos.s3.us-west-2.amazonaws.com/Event-Banner-Introit.jpg",
        map: "https://maps.app.goo.gl/iydDRkw79hczfSQ19",
        datetime: new Date(Date.parse("Nov 3 2023 19:30:00")),
        name: "Introit",
        summary: 'Join us for an enchanting evening of choral and orchestral music at the "Introit" concert, where classical and contemporary compositions converge in harmony. This musical journey promises to elevate your senses with a captivating selection of pieces that span time and style.',
    },
    {
        location: "St. Mark's Cathedral",
        image: "https://amaviphotos.s3.us-west-2.amazonaws.com/Event-Banner-Introit.jpg",
        map: "https://maps.app.goo.gl/iydDRkw79hczfSQ19",
        datetime: new Date(Date.parse("Nov 4 2023 19:30:00")),
        name: "Introit",
        summary: 'Join us for an enchanting evening of choral and orchestral music at the "Introit" concert, where classical and contemporary compositions converge in harmony. This musical journey promises to elevate your senses with a captivating selection of pieces that span time and style.',
    },
];

const { CONNECTION_STRING } = process.env;
const db = await connectToDB(CONNECTION_STRING);

await db
    .sync({ force: true })
    .then(async () => {
        await Status.bulkCreate(status);
        await Voicing.bulkCreate(voicing);
        await Member.bulkCreate(members);
        await Event.bulkCreate(events);
        await Subscriber.bulkCreate(subscribers);
        await Affiliate.bulkCreate(affiliates);
        console.log("Seed data inserted successfully.");
    })
    .catch((error) => console.error("Error seeding data:", error));

await db.close();
