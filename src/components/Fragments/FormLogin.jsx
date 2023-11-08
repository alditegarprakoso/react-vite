import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";
import Spinner from "../Elements/Spinner";
import Modal from "../Elements/Modal";

export default function FormLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    setLoading(true);
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("user", JSON.stringify(res));
        setLoading(false);
        navigate("/products")
      } else {
        setError(res.response.data);
        setLoading(false);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      <div className="mb-6">
        <InputForm
          type="text"
          name="username"
          label="username"
          placeholder="Jhon Doe"
          required="required"
          ref={usernameRef}
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
      {error && <p className="mb-6 text-red-500">{error}</p>}
      <Button color="bg-blue-400 w-full" type="submit">
        Login
      </Button>
      <p>Account Demo : johnd, m38rmF$</p>
    </form>
  );
}
