import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
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
  console.log("edit event form errors", errors);

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
      <div className="flex flex-row m-1 p-1">
        <label className="px-1 my-2 w-24">Name: </label>
        <input className="px-1 my-0" type="text" {...register("name", {})} />
      </div>
      <div className="flex flex-row m-1 p-1  items-center">
        <label className="px-1 my-2 w-20">Summary:</label>
        <textarea
          className="px-1 my-0 rounded-md"
          rows={9}
          cols={40}
          type="text"
          {...register("summary", {})}
        />
      </div>
      <div className="flex flex-row m-1">
        <label className="px-1 my-2 w-20">Image Url:</label>
        <textarea
          className="px-1 my-0 rounded-md"
          rows={2}
          cols={40}
          type="text"
          {...register("image", {})}
        />
      </div>
      <div className="flex flex-row m-1">
        <label className="px-1 my-2 w-24">Date/Time:</label>
        <input
          className="px-1 my-0"
          type="datetime"
          {...register("datetime", {})}
        />
      </div>
      <div className="flex flex-row m-1">
        <label className="px-1 my-2 w-24">Location:</label>
        <input
          className="px-1 my-0"
          type="text"
          {...register("location", {})}
        />
      </div>
      <div className="flex flex-row m-1 p-1">
        <label className="px-1 my-2 w-24">Map link: </label>
        <input className="px-1 my-0" type="text" {...register("map", {})} />
      </div>
      <ButtonGroup className="flex flex-row h-12 justify-center m-2">
        <Button
          className="h-12 justify-center font-bold tracking-widest w-40 m-1 p-1 bg-blue-500 text-gray-200 hover:bg-blue-700 hover:text-white"
          type="submit"
        >
          Save
        </Button>
        <Button
          className="h-12 uppercase justify-center tracking-widest font-bold w-40 m-1 p-1 bg-gray-200 hover:bg-gray-400 hover:text-white"
          onClick={() => setEditEvent(false)}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
}
