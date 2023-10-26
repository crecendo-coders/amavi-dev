import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function EditSubscriber({ setGetSubscribers, subscriber }) {
  const Confirm = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:subscriber.name,
      companyName:subscriber.companyName,
      id:subscriber.subscriberId,
      email:subscriber.email,
      phone:subscriber.phone
    },
  });
  console.log("new subscriber form errors", errors);
  const onSubmit = (data) => {
      console.log("save id" , data.id, data);
      axios
        .put(`/api/subscriber/${data.id}`, data)
        .then((res) => {
          console.log("subscribers", res.data);
        })
        .catch((err) => {
          console.error("unable to get subscribers for admin page", err);
        });
      setGetSubscribers(false);
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name of Subscriber</label>
      <input type="text" {...register("name", {})} />
      <input type="text" {...register("companyName", {})} />
      <label>Email</label>
      <input type="text" {...register("email", {})} />
      <label>Phone</label>
      <input type="text" {...register("phone", {})} />
      <ButtonGroup>
      <Button
          className="h-12 justify-center font-bold tracking-widest w-40 m-1 p-1 bg-blue-500 text-gray-200 hover:bg-blue-700 hover:text-white"
          type="submit"
        >
          Save
        </Button>
        <Button
          className="h-12 uppercase justify-center tracking-widest font-bold w-40 m-1 p-1 bg-gray-200 hover:bg-gray-400 hover:text-white"
          onClick={() => setGetSubscribers(false)}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
}
