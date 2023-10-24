import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function RegisterPage() {
  return (
    <AuthLayouts title="Register">
      <FormRegister></FormRegister>
      <p className="text-center mt-5 text-slate-500">
        Already have an account? <Link to="/login" className="text-blue-400 font-bold">Login</Link>
      </p>
    </AuthLayouts>
  );
}
