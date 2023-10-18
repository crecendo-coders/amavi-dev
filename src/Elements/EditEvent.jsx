import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function EditEvent({ setEditEvent, event }) {
  const Confirm = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:event.name,
      id:event.eventId,
      programme:event.programme,
      summary:event.summary,
      location:event.location,
      address:event.address,
      datetime:event.datetime,
      durationMin: event.durationMin,
    },
  });
  console.log("new event form errors", errors);
  const onSubmit = (data) => {
      console.log("save id" , data.id, data);
      axios
        .put(`/api/event/${data.id}`, data)
        .then((res) => {
          console.log("events", res.data);
        })
        .catch((err) => {
          console.error("unable to get events for admin page", err);
        });
      setEditEvent(null);
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name of Event</label>
      <input type="text" {...register("name", {})} />
      <label>Programme</label>
      <input type="text" {...register("programme", {})} />
      <label>Programme Summary</label>
      <input type="text" {...register("summary", {})} />
      <label>Location Name</label>
      <input type="text"  {...register("location", {})} />
      <label>Location Editress</label>
      <input type="text"  {...register("address", {})} />
      <label>Location Date/Time</label>
      <input type="datetime" {...register("datetime", {})} />
      <label>Duration (min)</label>
      <input type="number" {...register("durationMin")} />
      <ButtonGroup>
        <Button type="submit">Save</Button>
        <Button onClick={() => setEditEvent(false)}>Cancel</Button>
      </ButtonGroup>
    </form>
  );
}
