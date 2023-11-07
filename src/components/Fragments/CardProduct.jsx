import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function Header(props) {
    const { image, id } = props;
  return (
    <div>
      <Link to={`/product/${id}/detail`}>
        <img
          src={image}
          alt="product"
          className="object-cover h-[300px] w-full rounded-t-xl"
        />
      </Link>
    </div>
  );
}

function Body(props) {
    const { children, title, price } = props;
  return (
    <div className="text-white font-semibold pt-5 pb-20 px-5">
      <div>
        <h5 className="text-xl tracking-tight">{title}</h5>
        <p className="text-sm mt-1 mb-4">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0})}</p>
        <p className="text-sm text-slate-200">
          {`${children.slice(0, 50)}...`}
        </p>
      </div>
    </div>
  );
}

function Footer(props) {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center w-full rounded-b-2xl absolute bottom-0">
      <Button
        color="bg-blue-400"
        customClass="w-full rounded-t-none rounded-b-2xl"
        onClick={() => dispatch(addToCart(product))}
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
    <div className="bg-gray-700 w-[30%] max-w-sm shadow-md h-auto rounded-2xl mx-2 mb-10 relative">
      {children}
    </div>
  );
}
