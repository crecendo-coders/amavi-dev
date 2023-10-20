import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "rsuite";


export default function Subscribed({subscriber}) {

  const unsubscribe = () => {
    axios
      .put("/api/unsubscribe", subscriber)
      .then((res) => {
          Confirm.fire({
              icon: "success",
              title: `${subscriber.email} has been unsubscribed from Amavi Chorale Communications`,
              showConfirmButton: true,
          });
          navigate("/unsubscribed");
      });
  }
  return (
    <div>
      <h1>Thank you {subscriber.name} for joining our community!</h1>
      <h2>{subscriber.email} has been signed up to our newsletter.   </h2>
      <p>Click <button onClick={unsubscribe}>here</button> to unsubscribe</p>
    </div>
  );
}
