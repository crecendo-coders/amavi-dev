import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function EditSubscriber({ setEditSubscriber, subscriber }) {
  const Confirm = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lastName:subscriber.lastName,
      firstName:subscriber.firstName,
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
      setEditSubscriber(null);
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name of Subscriber</label>
      <input type="text" {...register("firstName", {})} />
      <input type="text" {...register("lastName", {})} />
      <input type="text" {...register("companyName", {})} />
      <label>Email</label>
      <input type="text" {...register("email", {})} />
      <label>Phone</label>
      <input type="text" {...register("phone", {})} />
      <ButtonGroup>
        <Button type="submit">Save</Button>
        <Button onClick={() => setEditSubscriber(false)}>Cancel</Button>
      </ButtonGroup>
    </form>
  );
}
