import { useLogin } from "../hooks/useLogin";

export default function ProfilePage() {
  const username = useLogin();
  return (
    <div>
      <h1>Profile</h1>
      <p>Username : {username}</p>
    </div>
  );
}
