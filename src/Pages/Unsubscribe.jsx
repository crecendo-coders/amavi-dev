import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function Unsubscribe() {
  const { hashedEmail } = useParams();
  console.log("hashedEmail",hashedEmail);
  const [subscriber, setSubscriber] = useState(null)
  const Confirm = withReactContent(Swal);
  const navigate = useNavigate();


  const resubscribe = () => {
    axios
      .post("/api/subscribe", subscriber)
      .then((res) => {
          Confirm.fire({
              icon: "success",
              title: `Awesome!  ${subscriber.email} has been resubscribed to Amavi Chorale Communications`,
              showConfirmButton: true,

          });
          navigate("/");
      });
  }

  useEffect(() => {
    console.log("axios hashedEmail", hashedEmail);
    axios
      .put(`/api/unsubscribe/email/${hashedEmail}`)
      .then((res) => {
        console.log("subscriber", res.data);
        setSubscriber(res.data)
      })
      .catch((err) => console.log("unsubscribe error:", err));
  }, [])

  if (!subscriber){
    return  <div>Loading...</div>
  }
  // TODO: the header and footer don't render here...Why?
  return (
    <div>
      <h1>Sad to see you go. </h1>
      <h2>{subscriber.email} has been removed from our mailing list.   </h2>
      <p>Click <button onClick={resubscribe}>here</button> to resubscribe</p>
    </div>
  );
}
