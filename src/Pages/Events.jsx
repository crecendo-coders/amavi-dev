import React, { useEffect, useState } from "react";
import axios from "axios";

const EventComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="events-container">
      <div className="event-banner">
        {events.length > 0 ? (
          <>
            <h2>{events[0].name}</h2>
            <p>Date: {events[0].date}</p>
            <p>{events[0].summary}</p>
          </>
        ) : (
          <p>No upcoming events</p>
        )}
      </div>

      <div className="future-events">
        {events.slice(1).map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>{event.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventComponent;
