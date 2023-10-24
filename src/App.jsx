const Button = (props) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${ props.color } text-white`}
      type="submit"
    >
      { props.title }
    </button>
  );
};

function ButtonNew(props) {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${ props.color } text-white`}
      type="submit"
    >
      { props.title }
    </button>
  )
}

function App() {
  return (
    <>
      <div className="flex justify-center bg-blue-400 min-h-screen items-center text-white">
        <div className="flex gap-x-2">
          <Button title="Order Now" color="bg-black"></Button>
          <Button title="Buy Now" color="bg-slate-600"></Button>
          <Button title="Buy Now" color="bg-red-600"></Button>
          <ButtonNew title="Button New" color="bg-red-400"></ButtonNew>
        </div>
      </div>
    </>
  );
}

export default App;
