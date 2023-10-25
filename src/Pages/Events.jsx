import React, { useState, useEffect } from "react";
import axios from "axios";
import Event from "../Elements/Event";

// console.log(events);

const EventComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((res) => {
        setEvents(res.data);
        console.log("Events page events", res.data);
      })
      .catch((err) => {
        console.error("Unable to get events for the Events page:", err);
      });
  }, []);
  return (
      <div className="flex flex-col justify-center md:flex-row w-full gap-4 my-4">
        {events.map((event) => (<Event event={event} />))}
      </div>

  );
};

export default EventComponent;
