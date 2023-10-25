import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
import EventForm from "./EventForm";
import { useForm } from "react-hook-form";

export default function EditEvent({ setEditEvent, event }) {
  const defaultValues = {
    id: event.eventId,
    name: event.name,
    summary: event.summary,
    image: event.image,
    datetime: new Date(event.datetime).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    location: event.location,
    map: event.map,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  console.log("new event form errors", errors);

  const onSubmit = (data) => {
    console.log("save id", data.id, data);
    axios
      .put(`/api/event/${data.id}`, data)
      .then((res) => {
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
    setEditEvent(false);
  };
  return (
    <form
      className="flex flex-col p-2 bg-gray-600"
      onSubmit={handleSubmit(onSubmit)}
    >
        <EventForm register={register} setEditEvent={setEditEvent} />

    </form>
  );
}
