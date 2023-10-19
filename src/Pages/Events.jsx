import React, { useState, useEffect } from "react";
import axios from "axios";

const EventComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch your events data using axios or your preferred method and set it using setEvents.
    // Example:
    axios.get("your_api_endpoint").then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div>
      <a
        href="/events/2023/11/14/introit"
        className="mx-auto bg-gray-100 h-screen flex items-center justify-center px-8"
        style={{ textDecoration: "none" }}
      >
        <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
          <div
            className="w-full h-64 bg-top bg-cover rounded-t"
            style={{
              backgroundImage: `url(https://amaviphotos.s3.us-west-2.amazonaws.com/Event-Banner-Introit.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
              <div className="md:text-3xl">Nov</div>
              <div className="md:text-6xl">14</div>
              <div className="md:text-xl">7:30 pm</div>
            </div>
            <div className="p-4 font-normal text-gray-800 md:w-3/4">
              <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                Introit
              </h1>
              <p className="leading-normal">
                Join us for an enchanting evening of choral and orchestral music
                at the "Introit" concert, where classical and contemporary
                compositions converge in harmony. This musical journey promises
                to elevate your senses with a captivating selection of pieces
                that span time and style.
              </p>
              <div className="flex flex-row items-center mt-4 text-gray-700">
                <div className="w-1/2">St. Mark's Cathedral</div>
              </div>
            </div>
          </div>
        </div>
      </a>

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

      <a
        href="/events/2023/11/15/introit"
        className="mx-auto bg-gray-100 h-screen flex items-center justify-center px-8"
        style={{ textDecoration: "none" }}
      >
        <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
          <div
            className="w-full h-64 bg-top bg-cover rounded-t"
            style={{
              backgroundImage: `url(https://amaviphotos.s3.us-west-2.amazonaws.com/Event-Banner-Introit.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
              <div className="md:text-3xl">Nov</div>
              <div className="md:text-6xl">15</div>
              <div className="md:text-xl">7:30 pm</div>
            </div>
            <div className="p-4 font-normal text-gray-800 md:w-3/4">
              <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                Introit
              </h1>
              <p className="leading-normal">
                Join us for an enchanting evening of choral and orchestral music
                at the "Introit" concert, where classical and contemporary
                compositions converge in harmony. This musical journey promises
                to elevate your senses with a captivating selection of pieces
                that span time and style.
              </p>
              <div className="flex flex-row items-center mt-4 text-gray-700">
                <div className="w-1/2">St. Mark's Cathedral</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventComponent;


// const [events, setEvents] = useState([]);

// useEffect(() => {
//   axios
//     .get("/api/events")
//     .then((res) => {
//       setEvents(res.data);
//       console.log("Events page events", res.data);
//     })
//     .catch((err) => {
//       console.error("Unable to get events for the Events page:", err);
//     });
// }, []);
// console.log(events);
