import { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  const { type, placeholder, name, required = false } = props;
  return (
    <input
      type={type}
      name={name}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 focus:outline-none"
      placeholder={placeholder}
      required={required}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
