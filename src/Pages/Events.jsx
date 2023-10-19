import React from "react";
import axios from "axios";

const EventComponent = () => {
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
