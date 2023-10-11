import TextArea from "./TextArea";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
// what form fields have to be rendered based on a particular prop
//control prop determines the type of form control we need to render e.g text area, input , radio etc..
//label prop is the label text for the form field
//name prop for the field and error message components

const FormInput = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};

export default FormInput;
