import EventComponent from "./Events";

export default function Homepage() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <iframe
        className="mt-4 sm:h-auto lg:h-[750px]"
        width="80%"
        src="https://www.youtube.com/embed/NfNPQ6ljU1Q?si=0ZoM14JeOL-Wphx3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay
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
