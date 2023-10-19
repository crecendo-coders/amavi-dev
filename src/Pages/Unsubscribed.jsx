import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "rsuite";


export default function Unsubscribed({subscriber}) {

    const resubscribe = () => {
      axios
        .put("/api/subscribe", subscriber)
        .then((res) => {
            Confirm.fire({
                icon: "success",
                title: `Thank you ${subscriber.name} for joining our community!`,
                showConfirmButton: true,
            });
            navigate("/subscribed");
        });
    }
    return (
      <div>
      <h1>We are sad to see you go</h1>
      <h2>{subscriber.email} has been unsubscribed from all Amavi Chorale communications</h2>
      <h3>Click <button onClick={resubscribe}>HERE</button> to resubscribe</h3>
    </div>
    );
  }