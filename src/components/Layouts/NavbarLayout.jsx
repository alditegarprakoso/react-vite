import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { CartIcon } from "../Icons";
import { DarkMode } from "../../context/DarkMode";

function NavbarLayout() {
  const username = useLogin();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-end items-center w-full h-16 px-5 mb-5 bg-blue-400 sticky top-0">
      <p className="text-white font-bold -tracking-tighter mr-5">{username}</p>
      <div className="flex items-center mr-6 relative">
        <CartIcon />
        <span className="bg-white absolute bottom-5 right-[-10px] rounded-xl px-[6px] flex justify-center items-center font-bold text-blue-400">
          {cart.length}
        </span>
      </div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        <img
          src={
            isDarkMode ? "./images/light-mode.png" : "./images/dark-mode.png"
          }
          alt=""
        />
      </button>
      <Button customClass="bg-slate-700 dark:bg-white dark:text-slate-700" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default NavbarLayout;
