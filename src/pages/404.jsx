import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError;
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen text-white text-center">
          <h1 className="text-blue-400 text-5xl font-bold mb-10">Oops!</h1>
          <p className="text-blue-400 text-xl font-bold mb-5">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-blue-400 text-base font-bold">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
    </>
  );
}
