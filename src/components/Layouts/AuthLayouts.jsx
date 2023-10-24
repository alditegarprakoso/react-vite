export default function AuthLayouts(props) {
  const { children, title } = props;
  return (
    <div className="w-full max-w-xs">
      <div className="mb-8">
        <h1 className="text-blue-400 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, please enter your details
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
}
