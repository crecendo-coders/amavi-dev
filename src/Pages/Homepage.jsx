import { useLoaderData } from "react-router-dom";
import EventComponent from "./Events";
import Newsletter from "../Elements/Newsletter";

export default function Homepage() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <iframe
        className="mt-4"
        width="80%"
        height="750"
        src="https://www.youtube.com/embed/NfNPQ6ljU1Q?si=0ZoM14JeOL-Wphx3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoplay
        muted
      ></iframe>
      {/* <img
            src="https://amaviphotos.s3.us-west-2.amazonaws.com/ChoirGroupJPGfile+-+instasize.jpg"
            alt="Cathedral Organ"
          /> */}

      <EventComponent />
    </div>
  );
}
