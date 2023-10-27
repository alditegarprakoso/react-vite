import Button from "./components/Elements/Button";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen items-center text-white">
        <p className="text-blue-400 text-8xl font-bold mb-10">Hello World</p>
        <a href="/login"><Button>Login</Button></a>
      </div>
    </>
  );
}

export default App;
