



  import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddEvent({setAddEvent}) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      durationMin: 120,
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
      <input type="text" placeholder="name" {...register("name", {})} />
      <input type="text" placeholder="programme" {...register("programme", {})} />
      <input type="text" placeholder="summary" {...register("summary", {})} />
      <input type="text" placeholder="location" {...register("location", {})} />
      <input type="text" placeholder="address" {...register("address", {})} />
      <input type="datetime-local" placeholder="datetime" {...register("datetime", {})} />
      <input type="number" {...register("durationMin")} />

      <input type="submit" />
    </form>
  );
}