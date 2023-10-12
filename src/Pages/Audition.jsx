import { useState } from "react";
import { useForm, useController } from "react-hook-form";
import "./../../css/form.css";
function Input(props) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

export default function Audition() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    Salutation
      <select {...register("title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <Input control={control} type="text" placeholder="First and Last Name" {...register("First and Last Name", {required: true, maxLength: 100})} />
      <Input control={control} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <Input control={control} type="tel" placeholder="Phone" {...register("Phone", {required: true})} />
      <Input control={control} type="number" placeholder="Years of Experience" {...register} />
      <Input control={control} type="text" placeholder="Description of Vocal Experience" {...register} />
      
      <select placeholder="How did you hear about us?"{...register("connection")}>
        <option value="Friend">Friend</option>
        <option value=" Event"> Event</option>
        <option value=" Social Media"> Social Media</option>
        <option value=" Advertisement"> Advertisement</option>
        <option value=" Other"> Other</option>
      </select>
      Vocal Range(s)
      Soprano I
      <Input control={control} type="checkbox" placeholder="Soprano I" {...register("Soprano I", {})} />
      <Input control={control} type="checkbox" placeholder="Soprano II" {...register("Soprano II", {})} />
      <Input control={control} type="checkbox" placeholder="Alto I" {...register("Alto I", {})} />
      <Input control={control} type="checkbox" placeholder="Alto II" {...register("Alto II", {})} />
      <Input control={control} type="checkbox" placeholder="Tenor I" {...register("Tenor I", {})} />
      <Input control={control} type="checkbox" placeholder="Tenor II" {...register("Tenor II", {})} />
      <Input control={control} type="checkbox" placeholder="Baritone" {...register("Baritone", {})} />
      <Input control={control} type="checkbox" placeholder="Bass" {...register("Bass", {})} />

      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}