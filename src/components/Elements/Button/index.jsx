const Button = (props) => {
  const { children = "Insert title", color = "bg-black", customClass, onClick = () => {}, type = "button" } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${color} text-white ${customClass}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button