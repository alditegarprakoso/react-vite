import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(function InputForm(props, ref) {
  const { type, label, name, placeholder, required } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        ref={ref}
      />
    </div>
  );
});

export default InputForm