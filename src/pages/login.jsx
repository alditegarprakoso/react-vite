import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <AuthLayouts title="Login">
      <FormLogin></FormLogin>
      <p className="text-center mt-5 text-slate-500">
        Don&apos;t have an account? <Link to="/register" className="text-blue-400 font-bold">Register</Link>
      </p>
    </AuthLayouts>
  );
}
