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
    <div className="bg-gray-100 p-4"> 
      <div className="bg-blue-500 text-white p-4 mb-4"> 
        {events.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold">{events[0].name}</h2>
            <p>Date: {events[0].date}</p>
            <p className="mt-2">{events[0].summary}</p>
          </>
        ) : (
          <p>No upcoming events</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
        {events.slice(1).map((event) => (
          <div key={event.id} className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <p>Date: {event.date}</p>
            <p className="mt-2">{event.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventComponent;
