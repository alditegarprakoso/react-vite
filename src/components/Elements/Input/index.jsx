import Input from "./Input";
import Label from "./Label";

export default function InputForm(props) {
  const { type, label, name, placeholder, required } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} required={required}></Input>
    </div>
  );
}
