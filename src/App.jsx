import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <div className="flex justify-evenly min-h-screen items-center text-white">
        <LoginPage></LoginPage>
        <RegisterPage></RegisterPage>
      </div>
    </>
  );
}

export default App;
