import React from 'react';

// Sample data for events (you can replace this with your own data)
const eventsData = [
  {
    id: 1,
    title: 'Next Event',
    date: 'October 15, 2023',
    description: 'Join us for our next exciting event!',
  },
  {
    id: 2,
    title: 'Future Event 1',
    date: 'November 5, 2023',
    description: 'Details about the first future event.',
  },
  {
    id: 3,
    title: 'Future Event 2',
    date: 'December 10, 2023',
    description: 'Details about the second future event.',
  },
];

export default function Events() {
  const nextEvent = eventsData[0];

  const futureEvents = eventsData.slice(1);

  return (
    <div className="events-container">
      <div className="event-banner">
        <h2>{nextEvent.title}</h2>
        <p>Date: {nextEvent.date}</p>
        <p>{nextEvent.description}</p>
      </div>

      <div className="future-events">
        {futureEvents.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
