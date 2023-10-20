import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./../../css/form.css";
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
        <form className="auditionForm" onSubmit={handleSubmit(onSubmit)}>
            Salutation
            <select {...register("title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
            </select>
            <input
                type="text"
                className="auditionInput"
                placeholder="First and Last Name"
                {...register("name", { required: true, maxLength: 100 })}
            />
            <input
                type="text"
                className="auditionInput"
                placeholder="Email"
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                })}
            />
            <input
                type="dob"
                className="auditionInput"
                placeholder="Date of Birth"
                {...register("dob")}
            />
            <input
                type="tel"
                className="auditionInput"
                placeholder="Phone"
                {...register("phone", { required: true })}
            />
            <input
                type="number"
                className="auditionInput"
                placeholder="Years of Experience"
                {...register("experience")}
            />
            <input
                type="text"
                className="auditionInput"
                placeholder="Description of Vocal Experience"
                {...register("expDetail")}
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
            <br />
            Vocal Range(s):
            <select {...register("voicingId")}>
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
            <div
                class="g-recaptcha"
                data-sitekey={import.meta.env.VITE_PUBLIC_CAPTCHA}
            ></div>
            <input type="submit" />
        </form>
    );
}
