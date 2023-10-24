const Button = (props) => {
  const { children = 'Insert title', color = 'bg-black' } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${ color } text-white`}
      type="submit"
    >
      { children }
    </button>
  );
};

function App() {
  return (
    <>
      <div className="flex justify-center bg-blue-400 min-h-screen items-center text-white">
        <div className="flex gap-x-2">
          <Button color="bg-black">
            Login
          </Button>
          <Button color="bg-slate-600">
            Logout
          </Button>
          <Button color="bg-red-600">
            Register
          </Button>
          <Button></Button>
        </div>
      </div>
    </>
  );
}

export default App;
