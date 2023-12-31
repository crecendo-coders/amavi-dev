import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Audition() {
  const Confirm = withReactContent(Swal);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("new audition form errors", errors);

  const onSubmit = (data) => {
    console.log("Audition Data:", data);
    axios
      .post("/api/audition", data)
      .then((res) => {
        console.log("Response: ", res.data);
        Confirm.fire({
          icon: "success",
          title: "Thanks for requesting an audition. We will contact you soon",
          showConfirmButton: true,
        });
        navigate("/");
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
    <div className="flex justify-center ">
      <div className="p-4 w-full max-w-lg border border-gray-500 bg-gray-200  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold m-2">Audition Form</h2>
        <form
          className="flex flex-col p-2 bg-gray-600 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <select
            className="p-2 mb-4 border border-gray-300 rounded"
            {...register("title", { required: true })}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Miss">Dr</option>
          </select>
          <input
            type="text"
            className="p-2 mb-4 border border-gray-300 rounded"
            placeholder="First and Last Name"
            {...register("name", { required: true, maxLength: 100 })}
          />

          <input
            type="text"
            className="p-2 mb-4 border border-gray-300 rounded"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <input
            type="tel"
            className="p-2 mb-4 border border-gray-300 rounded"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          <input
            type="number"
            className="p-2 mb-4 border border-gray-300 rounded"
            placeholder="Years of Vocal Experience"
            {...register("experience")}
          />
          <textarea
            type="text"
            id="expDetail"
            className="p-2 mb-1 border border-gray-300 rounded"
            placeholder="Please tell us a bit about your vocal background. Copy/Paste, enter for new lines, and tab spacings are allowed."
            rows="3"
            {...register("expDetail")}
          />
          <label className="block m-0 text-gray-100">
            How did you hear about us?
          </label>
          <select
            className="p-2 m-0 border border-gray-300 rounded"
            {...register("connection")}
          >
            <option value="select">Select...</option>
            <option value="Friend">Friend</option>
            <option value="Event"> Event</option>
            <option value="Social"> Social Media</option>
            <option value="Advertisement"> Advertisement</option>
            <option value="Other"> Other</option>
          </select>

          <label className="block m-0 text-gray-100">Vocal Range(s):</label>
          <select
            className="p-2 border border-gray-300 rounded"
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
          <>
            <div
              className="g-recaptcha"
              data-sitekey={import.meta.env.VITE_PUBLIC_CAPTCHA}
            ></div>
          </>

          <button
            type="submit"
            className="p-2 m-2 mt-4 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
