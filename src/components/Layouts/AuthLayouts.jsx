import { Link } from "react-router-dom";

function BottomSection(props) {
  const { type } = props;
  return (
    <p className="text-center mt-5 text-slate-500">
      {type === "login" ? "Don't have an account?" : "Already have an account?"}
      {" "}
      
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
  );
}

export default function AuthLayouts(props) {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center h-screen">
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
