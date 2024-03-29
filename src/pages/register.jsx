import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function RegisterPage() {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister></FormRegister>
    </AuthLayouts>
  );
}
