import { useLoaderData } from "react-router-dom";
import EventComponent from "./Events";

export default function Homepage() {
  // const { hero } = useLoaderData();
  return (
    <div>
      <img src="/hero.jpeg" alt="Choir image" />
      <EventComponent/>
    </div>
  );
}


