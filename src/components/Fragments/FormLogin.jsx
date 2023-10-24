import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormLogin() {
  return (
    <form action="#">
      <div className="mb-6">
        <InputForm
          type="email"
          name="email"
          label="Email"
          placeholder="example@mail.com"
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
      <Button color="bg-blue-400 w-full">Login</Button>
    </form>
  );
}
