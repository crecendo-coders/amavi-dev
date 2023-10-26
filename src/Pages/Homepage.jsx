import EventComponent from "./Events";

export default function Homepage() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      {/* <iframe
        className="mt-4 sm:h-auto lg:h-[750px]"
        width="80%"
        src="https://www.youtube.com/embed/NfNPQ6ljU1Q?si=0ZoM14JeOL-Wphx3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoplay
        muted
      ></iframe> */}

      <img
        src="https://amaviphotos.s3.us-west-2.amazonaws.com/ChoirGroupJPGfile.jpg"
        alt="Cathedral Organ"
        className="mt-4 sm:h-auto lg:h-auto lg:w-[90%] sm:w-[100%]"
      />

      <div className="lg:w-[92%] sm:w-[100%]">
        <EventComponent />
        </div>
    </div>
  );
}
