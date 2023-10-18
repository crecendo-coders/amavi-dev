import { useLoaderData } from "react-router-dom";
import EventComponent from "./Events";
import Newsletter from "../Elements/Newsletter";

export default function Homepage() {
  // const { hero } = useLoaderData();
  return (
    <>

    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <img
        src="/hero.jpeg"
        alt="Choir image"
        className="w-64 h-auto rounded-lg shadow-lg"
      />
      <EventComponent />
    </div>
    </>
  );
}
