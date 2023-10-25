import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormLogin() {
  
  function handleLogin(event) {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    localStorage.setItem("user", JSON.stringify(data));

    window.location.href = "/products";
  }

  return (
    <form onSubmit={handleLogin}>
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
      <Button color="bg-blue-400 w-full" type="submit">Login</Button>
    </form>
  );
}
