import EventComponent from "./Events";

export default function Homepage() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <iframe
        className="mt-4"
        width="80%"
        height="750"
        src="https://www.youtube.com/embed/NfNPQ6ljU1Q?si=0ZoM14JeOL-Wphx3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay
        muted
      ></iframe>

      <EventComponent />
    </div>
  );
}
