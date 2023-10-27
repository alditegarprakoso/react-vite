function Modal(props) {
  const { children } = props;
  return (
    <div
      id="modal"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      {children}
    </div>
  );
}

export default Modal;
