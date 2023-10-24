import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormRegister() {
  return (
    <form action="#">
      <div className="mb-6">
        <InputForm
          type="text"
          name="name"
          label="Fullname"
          placeholder="Insert your fullname"
          required="required"
        />
      </div>
      <div className="mb-6">
        <InputForm
          type="password"
          name="password"
          label="Password"
          placeholder="******"
          required="required"
        />
      </div>
      <div className="mb-6">
        <InputForm
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="******"
          required="required"
        />
      </div>
      <Button color="bg-blue-400 w-full">Register</Button>
    </form>
  );
}
