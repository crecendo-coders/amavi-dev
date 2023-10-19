import React, { useEffect, useState } from "react";
import axios from "axios";

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
  console.log(events);

  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, i) => (
          <div key={i} className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
              <div
                className="w-full h-64 bg-top bg-cover rounded-t"
                style={{
                  backgroundImage: `url("https://amaviphotos.s3.us-west-2.amazonaws.com/Introit-Poster.jpg")`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="flex flex-col w-full md:flex-row">
                <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                  <div className="md:text-3xl">{event.date}</div>
                  <div className="md:text-6xl">{event.date}</div>
                  <div className="md:text-xl">{event.time}</div>
                </div>
                <div className="p-4 font-normal text-gray-800 md:w-3/4">
                  <h3 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                    {event.name}
                  </h3>
                  <p className="leading-normal">{event.summary}</p>
                  <div className="flex flex-row items-center mt-4 text-gray-700">
                    <div className="w-1/2">{event.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventComponent;
