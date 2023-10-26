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
      id:member.memberId,
      name:member.name,
      statusId:member.statusId,
      email:member.email,
      phone:member.phone,
      dob:member.dob,
    //   experience:member.experience,
    expDetail:member.expDetail,
    connection:member.connection,
    // boolean
    hasAuditioned:member.hasAuditioned,
},
  });
  console.log("new member form errors", errors);
  const onSubmit = (data) => {
    
      console.log("save id" , data.id, data);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name of Member</label>
      <input type="text" {...register("name", {})} />
      <label>Status</label>
      <select name='Status' {...register("statusId", {})}>
        <option value={1}>Pending</option>
        <option value={2}>Active</option>
        <option value={3}>Inactive</option>
        <option value={0}>Not a member</option>
      </select>
      <label>Email</label>
      <input type="email" {...register("email", {})} />
      <label>Phone</label>
      <input type="text" {...register("phone", {})} />
      <label>Birthday</label>
      <input type="dropdown" {...register("dob", {})} />
      <label>Has Auditioned</label>
      <select name='Has Auditioned' {...register("hasAuditioned", {})}>
        <option value={true}>True</option>
        <option value={false}>False</option>
      </select>
      <label>Experience Detail</label>
      <input type="text" {...register("expDetail", {})} />
      <label>Connection</label>
      <input type="text" {...register("connection", {})} />
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