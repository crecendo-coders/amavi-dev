import { useLoaderData } from "react-router-dom";
import EventComponent from "./Events";
import Newsletter from "../Elements/Newsletter";

export default function Homepage() {
  return (
    <>

    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <iframe
        width="80%"
        height="100%"
        src="https://www.youtube.com/embed/NfNPQ6ljU1Q?si=0ZoM14JeOL-Wphx3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoplay
        muted
      ></iframe>

      <EventComponent />
    </div>
    </>
  );
}