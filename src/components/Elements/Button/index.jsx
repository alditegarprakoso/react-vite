const Button = (props) => {
  const { children = "Insert title", color = "bg-black", customClass } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${color} text-white ${customClass}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button