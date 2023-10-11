import { Member, Role, Status, Voicing, Affiliate, Event } from './model.js'; 
import connectToDB from './db.js'; 
const seedData = async () => {
  const db = await connectToDB('postgresql:///personal-project');

  try {
    await db.sync({ force: true });

    const roles = await Role.bulkCreate([
      { type: 'Admin' },
      { type: 'User' },
      { type: 'Conductor' },
    ]);

    const statuses = await Status.bulkCreate([
      { type: 'Active' },
      { type: 'Inactive' },
    ]);

    const voicings = await Voicing.bulkCreate([
      { type: 'Soprano' },
      { type: 'Alto' },
      { type: 'Tenor' },
      { type: 'Bass' },
    ]);

    const members = await Member.bulkCreate([
      {
        roleId: roles[0].id,
        statusId: statuses[0].id,
        email: 'admin@example.com',
        phone: '123-456-7890',
        dob: '1990-01-01',
        experience: 'Some experience',
        voicingId: voicings[0].id,
        username: 'admin_user',
        password: 'admin_password',
      },
      {
        roleId: roles[1].id,
        statusId: statuses[0].id,
        email: 'user@example.com',
        phone: '987-654-3210',
        dob: '1995-05-05',
        experience: 'Limited experience',
        voicingId: voicings[1].id,
        username: 'regular_user',
        password: 'user_password',
      },
      { // conductor
        roleId: roles[2].id,
        statusId: statuses[0].id,
        email: 'conductor@example.com',
        phone: '987-654-3210',
        dob: '1990-05-05',
        experience: 'Extensive',
        voicingId: voicings[2].id,
        username: 'conductor',
        password: 'conductor_password',
      },
    ]);

    // Seed data for affiliates
    const affiliates = await Affiliate.bulkCreate([
      {
        start_date: '2023-01-01',
        end_date: '2023-12-31',
        name: 'Affiliate 1',
        link: 'https://affiliate1.com',
        logo: 'logo1.jpg',
      },
      {
        start_date: '2023-02-01',
        end_date: '2023-11-30',
        name: 'Affiliate 2',
        link: 'https://affiliate2.com',
        logo: 'logo2.jpg',
      },
    ]);

    // Seed data for events
    const events = await Event.bulkCreate([
      {
        programme: 'Programme 1',
        location: 'Location 1',
        address: 'Address 1',
        date: '2023-03-15',
        start_time: '09:00 AM',
        duration: '2 hours',
        name: 'Event 1',
        summary: 'Event 1 summary',
      },
      {
        programme: 'Programme 2',
        location: 'Location 2',
        address: 'Address 2',
        date: '2023-04-20',
        start_time: '02:30 PM',
        duration: '3 hours',
        name: 'Event 2',
        summary: 'Event 2 summary',
      },
    ]);

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await db.close();
  }
};

seedData();
