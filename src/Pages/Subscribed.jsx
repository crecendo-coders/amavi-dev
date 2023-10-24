import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function Subscribed({subscriber}) {
  const Confirm = withReactContent(Swal);

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
