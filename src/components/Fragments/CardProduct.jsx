import Button from "../Elements/Button";

function Header(props) {
    const { image } = props;
  return (
    <div>
      <a href="#">
        <img
          src={image}
          alt="product"
          className="object-cover h-[300px] w-full rounded-t-xl"
        />
      </a>
    </div>
  );
}

function Body(props) {
    const { children, title, price } = props;
  return (
    <div className="text-white font-semibold p-5">
      <a href="#">
        <h5 className="text-xl tracking-tight">{title}</h5>
        <p className="text-sm mt-1 mb-4">Rp. {price}</p>
        <p className="font-normal text-justify text-slate-200">
          {children}
        </p>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex items-center justify-center w-full rounded-b-2xl">
      <Button
        color="bg-blue-600"
        customClass="w-full rounded-t-none rounded-b-2xl"
      >
        Add to cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default function CardProduct(props) {
  const { children } = props;
  return (
    <div className="bg-gray-700 w-full max-w-sm shadow-md h-auto rounded-2xl mx-4">
      {children}
    </div>
  );
}
