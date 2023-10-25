import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function EventForm({ register, setEditEvent }) {
  
  return (
    <>

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
            className="h-12 justify-center font-bold tracking-widest w-40 m-1 p-1"
            type="submit"
          >
            Save
          </Button>
          <Button
            className="h-12 uppercase justify-center tracking-widest font-bold w-40 m-1 p-1"
            onClick={() => setEditEvent(-1)}
          >
            Cancel
          </Button>
        </ButtonGroup>
    </>

  );
}
