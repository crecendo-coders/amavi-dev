import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function AddSubscriber({ setAddSubscriber }) {
  const Confirm = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("new subscriber form errors", errors);
  const onSubmit = (data) => {
    console.log("Audition Data:", data);
    axios
      .post(`/api/subscriber/`, data)
      .then((res) => {
        console.log("Response: ", res.data);
        setAddSubscriber(false);
      })
      .catch((err) => {
        Confirm.fire({
          icon: "error",
          title: err,
          showConfirmButton: false,
        });
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name of Subscriber</label>
      <input type="text" placeholder="John" {...register("firstName", {})} />
      <input type="text" placeholder="Doe" {...register("lastName", {})} />
      <input type="text" placeholder="Company (optional)" {...register("companyName", {})} />
      <label>Email</label>
      <input
    name="email"
    placeholder="Email"
    required
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    })}
  />
      <label>Phone</label>
      <input type="text" {...register("phone", {})} />
      <ButtonGroup>
        <Button type="submit">Save</Button>
        <Button onClick={() => setAddSubscriber(false)}>Cancel</Button>
      </ButtonGroup>
    </form>
  );
}
