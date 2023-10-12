import { useState } from "react";
import { useForm } from "react-hook-form";
import "./../../css/form.css";

export default function Audition() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const onSubmit = (data) => { 
    axios
      .post("/api/audition", data)
      .then((res) => {
        console.log("Response: ", res.data);
        // confirmation
      })
      .catch((err) => console.log(err));
   }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Salutation
      <select {...register("title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <input
        type="text"
        placeholder="First and Last Name"
        {...register("First and Last Name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Phone"
        {...register("Phone", { required: true })}
      />
      <input type="number" placeholder="Years of Experience" {...register} />
      <input
        type="text"
        placeholder="Description of Vocal Experience"
        {...register}
      />
      How did you hear about us?
      <select {...register("connection")}>
        <option value="select">Select...</option>
        <option value="friend">Friend</option>
        <option value=" event"> Event</option>
        <option value=" social"> Social Media</option>
        <option value=" advertisement"> Advertisement</option>
        <option value=" other"> Other</option>
      </select>
      <div className="flex flex-col justify-left">
        Vocal Range(s):
        <br />
        <div>
          <input
            type="checkbox"
            placeholder="soprano1"
            {...register("soprano1", {})}
          />
          Soprano I
        </div>
        <input
          type="checkbox"
          placeholder="soprano2"
          {...register("soprano2", {})}
        />
        Soprano II
        <input type="checkbox" placeholder="alto1" {...register("alto1", {})} />
        Alto I
        <input type="checkbox" placeholder="alto2" {...register("alto2", {})} />
        Alto II
        <input
          type="checkbox"
          placeholder="tenor1"
          {...register("tenor1", {})}
        />
        Tenor I
        <input
          type="checkbox"
          placeholder="tenor2"
          {...register("tenor2", {})}
        />
        Tenor II
        <input
          type="checkbox"
          placeholder="baritone"
          {...register("baritone", {})}
        />
        Baritone
        <input type="checkbox" placeholder="bass" {...register("bass", {})} />
        Bass
      </div>
      <p>data {data}</p>
      <input type="submit" />
    </form>
  );
}
