


  import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function AddEvent({setAddEvent}) {
  const Confirm = withReactContent(Swal);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      durationMin: 120,
      // datetime: new Date().setHours(19,0,0,0,0)
    }
  });
  console.log("new event form errors", errors);
  const onSubmit = (data) => {
    console.log("Audition Data:", data);
    axios
      .post(`/api/event/`, data)
      .then((res) => {
        console.log("Response: ", res.data);
        setAddEvent(false)
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
    <label>Name of Event</label>
      <input type="text" placeholder="name" {...register("name", {})} />
    <label>Programme</label>
      <input type="text" placeholder="programme" {...register("programme", {})} />
    <label>Programme Summary</label>
      <input type="text" placeholder="summary" {...register("summary", {})} />
    <label>Location Name</label>
      <input type="text" placeholder="location" {...register("location", {})} />
    <label>Location Address</label>
      <input type="text" placeholder="address" {...register("address", {})} />
    <label>Location Date/Time</label>
      <input type="datetime-local" {...register("datetime", {})} />
    <label>Duration (min)</label>
      <input type="number" {...register("durationMin")} />

      <input type="submit" />
    </form>
  );
}