import axios from "axios";
import React from "react";
import { Button, ButtonGroup } from "rsuite";
import { useForm } from "react-hook-form";

export default function EditMember({ setEditMember, member }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: member.memberId,
      name: member.name,
      statusId: member.statusId,
      email: member.email,
      phone: member.phone,
      voicingId:member.voicingId,
      //   experience:member.experience,
      expDetail: member.expDetail,
      connection: member.connection,
      // boolean
      hasAuditioned: member.hasAuditioned,
    },
  });
  console.log("new member form errors", errors);
  const onSubmit = (data) => {
    console.log("save id", data.id, data);
    axios
      .put(`/api/member/${data.id}`, data)
      .then((res) => {
        console.log("members", res.data);
      })
      .catch((err) => {
        console.error("unable to get members for admin page", err);
      });
    setEditMember(false);
  };
  return (
    <form
      className="flex flex-col p-0 bg-gray-600"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row m-1 p-1">
        <label className="px-1 my-0 w-24">Name: </label>
        <input
            type="text"
            className="p-0 mb-4 border border-gray-300 rounded"
            placeholder="First and Last Name"
            {...register("name", { required: true, maxLength: 100 })}
          />
      </div>
      <div className="flex flex-row m-1 p-1">
        <label className="px-1 my-0 w-24">Status: </label>
        <select name="Status" {...register("statusId", {})}>
          <option value={1}>Pending</option>
          <option value={2}>Active</option>
          <option value={3}>Inactive</option>
          <option value={0}>Not a member</option>
        </select>
      </div>
      <div className="flex flex-row m-1 p-1">
        <label className="px-1 my-0 w-24">Email: </label>
        <input
            type="text"
            className="p-0 mb-4 border border-gray-300 rounded"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
      </div>
      <div className="flex flex-row m-1 p-1">
        <label className="px-1 my-0 w-24">Phone: </label>
        <input
            type="tel"
            className="p-0 mb-4 border border-gray-300 rounded"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />      </div>
      <div className="flex flex-row m-1 p-1">
        <label className="px-1 my-0 w-24">Has Auditioned: </label>
        <select className="px-1 my-0 w-24" name="Has Auditioned" {...register("hasAuditioned", {})}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
      <label>Experience Detail</label>
      <textarea
            type="text"
            id="expDetail"
            className="p-2 mx-3 border border-gray-300 rounded"
            placeholder="Please tell us a bit about your vocal background. Copy/Paste, enter for new lines, and tab spacings are allowed."
            rows="3"
            {...register("expDetail")}
          />
      <div className="flex flex-row p-0 m-0 border border-gray-300 rounded">

      <label className="block mx-6">Connection</label>
      <select
            className="block px-4"
            {...register("connection")}
          >
            <option value="select">Select...</option>
            <option value="Friend">Friend</option>
            <option value="Event"> Event</option>
            <option value="Social"> Social Media</option>
            <option value="Advertisement"> Advertisement</option>
            <option value="Other"> Other</option>
          </select>
      </div>
      <div>
          <label className="block m-0 text-gray-100">Vocal Range(s):</label>
          <select
            className="p-0 border border-gray-300 rounded"
            {...register("voicingId")}
          >
            <option value="select">Select...</option>
            <option value="1">Soprano I</option>
            <option value="2">Soprano II</option>
            <option value="3">Alto I</option>
            <option value="4">Alto II</option>
            <option value="5">Tenor I</option>
            <option value="6">Tenor II</option>
            <option value="7">Baritone</option>
            <option value="8">Bass</option>
          </select>
      </div>
      <ButtonGroup>
        <Button
          className="h-12 justify-center font-bold tracking-widest w-40 m-1 p-1 bg-blue-500 text-gray-200 hover:bg-blue-700 hover:text-white"
          type="submit"
        >
          Save
        </Button>
        <Button
          className="h-12 uppercase justify-center tracking-widest font-bold w-40 m-1 p-1 bg-gray-200 hover:bg-gray-400 hover:text-white"
          onClick={() => setEditMember(false)}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
}
