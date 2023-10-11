import { Form, Formik } from "formik";
import { object, string, number, array } from "yup";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormInput from "../Elements/FormElements/FormInput";

export default function Audition() {
  const Confirm = withReactContent(Swal);
  const onSubmit = (values) => {
    console.log("Submitted Values:", values);
    Confirm.fire({
      icon: "success",
      title: "Thank you for applying",
      showConfirmButton: true,
    });
  };
  const dropdownOptions = [
    { key: "How did you hear about us?", value: "" },
    { key: "Friend", value: "friend" },
    { key: "Event", value: "event" },
    { key: "Social Media", value: "social" },
    { key: "Advertisement", value: "ad" },
    { key: "Other", value: "other" },
  ];
  const checkboxOptions = [
    { key: "Select your range(s)", value: "" },
    { key: "1st Soprano", value: "soprano1" },
    { key: "2nd Soprano", value: "soprano2" },
    { key: "1st Alto", value: "alto1" },
    { key: "2nd Alto", value: "alto2" },
    { key: "1st Tenor", value: "tenor1" },
    { key: "2nd Tenor", value: "tenor2" },
    { key: "Baritone", value: "baritone" },
    { key: "Bass", value: "bass" },
  ];
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    expDetail: "",
    training: "",
    connection: "",
    checkboxOption: [],
  };
  const validationSchema = object({
    name: string().required("Required"),
    email: string().email("Invalid email").required("Required").nullable(),
    phone: string().required("Required").nullable(),
    age: number(),
    experience: number(),
    expDetail: string(),
    training: string(),
    connection: string(),
    checkboxOption: array().required("Required"),
  });
  return (
    <>
      <h1>Audition</h1>
      <div>
        Amavi Chorale aspires to contribute to an already rich choral tradition
        along the Utah Wasatch Front. An audition is required to join the choir.
        To request an audition, fill out the form below.
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormInput
                control="input"
                label="First and Last Name"
                name="name"
              />
              <FormInput
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormInput
                control="input"
                type="number"
                label="Years of Experience"
                name="experience"
              />
              <FormInput control="input" label="Phone" name="phone" />
              <FormInput
                control="textarea"
                label="Description of Experience"
                name="expDetail"
              />
              <FormInput control="textarea" label="Training" name="training" />
              <FormInput
                control="select"
                label="How did you hear about us?"
                name="connection"
                options={dropdownOptions}
              />
              <FormInput
                control="checkbox"
                label="Vocal range(s)"
                name="checkboxOption"
                options={checkboxOptions}
              />
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
