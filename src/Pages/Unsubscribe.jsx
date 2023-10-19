import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "rsuite";


export default function Admin() {
  const appearance = "primary";
  
  return (
    <div>
      <h1>We are sad to see you go</h1>
      <h2>{email} has been unsubscribed from all Amavi Chorale communications</h2>
      <h3>Click <NavLink >HERE</NavLink> to resubscribe</h3>
    </div>
  );
}
