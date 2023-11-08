import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { useEffect } from "react";

function BottomSection(props) {
  const { type } = props;
  return (
    <>
    <p className="text-center mt-5 text-slate-500">
      {type === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
      {type === "login" && (
        <Link to="/register" className="text-blue-400 font-bold">
          Register
        </Link>
      )}
      {type === "register" && (
        <Link to="/login" className="text-blue-400 font-bold">
          Login
        </Link>
      )}
    </p>
    <p className="text-center text-blue-400 mt-2">Account Demo : johnd, m38rmF$</p>
    </>
  );
}

export default function AuthLayouts(props) {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-center items-center h-screen dark:bg-slate-700">
      <div className="absolute top-5 right-5">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          <img
            src={
              isDarkMode ? "./images/light-mode.png" : "./images/dark-mode.png"
            }
            alt=""
          />
        </button>
      </div>
      <div className="w-full max-w-xs border-2 border-blue-400 rounded-xl p-6 ">
        <div className="mb-8">
          <h1 className="text-blue-400 text-3xl font-bold mb-2">{title}</h1>
          <p className="font-medium text-slate-500">
            Welcome, please enter your details
          </p>
        </div>
        <div>{children}</div>
        <div>
          <BottomSection type={type} />
        </div>
      </div>
    </div>
  );
}
