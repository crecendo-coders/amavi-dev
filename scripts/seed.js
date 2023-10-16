import {
  Member,
  Role,
  Status,
  Voicing,
  Affiliate,
  Event,
  Audition,
} from "./../server/model.js";
import bcrypt from "bcryptjs";

import connectToDB from "./../server/db.js";
import 'dotenv/config'
const salt = bcrypt.genSaltSync(10);

const roles = [{ type: "Admin" }, { type: "User" }, { type: "Conductor" }];
const statuses = [{ type: "Active" }, { type: "Inactive" }];
const voicing = [
  { type: "Soprano I" },
  { type: "Soprano II" },
  { type: "Alto I" },
  { type: "Alto II" },
  { type: "Tenor I" },
  { type: "Tenor II" },
  { type: "Baritone" },
  { type: "Bass" },
];

const auditions = [
  {
    name: "Larry",
    email: "some@examploe.com",
    phone: "123 123-123",
    experience: 3,
    expDetail: "I love to sing",
    connection: "event",
    voicingId: 1,
  },
  {
    name: "Curly",
    email: "c@examploe.com",
    phone: "123 123-123",
    experience: 2,
    expDetail: "I love to sing",
    connection: "friend",
    voicingId: 3,
  },
];
const members = [
  {
    roleId: 1,
    statusId: 1,
    email: "admin@example.com",
    phone: "123-456-7890",
    dob: "1990-01-01",
    experience: "Some experience",
    voicingId: 1,
    username: "admin",
    password: bcrypt.hashSync("pwd", salt),
  },
  {
    roleId: 2,
    statusId: 1,
    email: "user@example.com",
    phone: "987-654-3210",
    dob: "1995-05-05",
    experience: "Limited experience",
    voicingId: 2,
  },
  {
    // conductor
    roleId: 3,
    statusId: 1,
    email: "conductor@example.com",
    phone: "987-654-3210",
    dob: "1990-05-05",
    experience: "Extensive",
    voicingId: 3,
  },
];

const affiliates = [
  {
    start_date: "2023-01-01",
    end_date: "2023-12-31",
    name: "Affiliate 1",
    link: "https://affiliate1.com",
    logo: "logo1.jpg",
  },
  {
    start_date: "2023-02-01",
    end_date: "2023-11-30",
    name: "Affiliate 2",
    link: "https://affiliate2.com",
    logo: "logo2.jpg",
  },
];

const events = [
  {
    programme: "Programme 1",
    location: "Location 1",
    address: "Address 1",
    date: "2023-03-15",
    start_time: "09:00 AM",
    durationMin: 120,
    name: "Event 1",
    summary: "Event 1 summary",
  },
  {
    programme: "Programme 2",
    location: "Location 2",
    address: "Address 2",
    date: "2023-04-20",
    start_time: "02:30 PM",
    durationMin: 180,
    name: "Event 2",
    summary: "Event 2 summary",
  },
];

const {CONNECTION_STRING} = process.env
const db = await connectToDB(CONNECTION_STRING);

await db
  .sync({ force: true })
  .then(async () => {
    await Role.bulkCreate(roles);
    await Status.bulkCreate(statuses);
    await Voicing.bulkCreate(voicing);
    await Member.bulkCreate(members);
    await Affiliate.bulkCreate(affiliates);
    await Audition.bulkCreate(auditions);
    await Event.bulkCreate(events);
    console.log("Seed data inserted successfully.");
  })
  .catch((error) => console.error("Error seeding data:", error));

await db.close();
