import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { CartIcon } from "../Icons";

function NavbarLayout() {
  const username = useLogin();
  const cart = useSelector((state) => state.cart.data);

  function handleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <div className="flex justify-end items-center w-full h-16 px-5 mb-5 bg-blue-400 sticky top-0">
      <p className="text-white font-bold -tracking-tighter mr-5">{username}</p>
      <div className="flex items-center mr-6 relative">
        <CartIcon />
        <span className="bg-white absolute bottom-5 right-[-10px] rounded-xl px-[6px] flex justify-center items-center font-bold text-blue-400">{cart.length}</span>
      </div>
      <Button customClass="bg-slate-700" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default NavbarLayout;
