import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const dataProducts = [
  {
    id: 1,
    image: "/images/shoes-1.webp",
    title: "Shoes Chocolate",
    price: "100.000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, reiciendis!",
  },
  {
    id: 2,
    image: "/images/adidas.jpeg",
    title: "Adidas",
    price: "150.000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, reiciendis!",
  },
  {
    id: 3,
    image: "/images/vans.jpeg",
    title: "Vans",
    price: "200.000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, reiciendis!",
  },
  {
    id: 4,
    image: "/images/new-balance.jpg",
    title: "New Balance",
    price: "200.000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, reiciendis!",
  },
];

export default function ProductsPage() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/login";
  }

  function handleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-5">
      {user && (
        <div className="flex justify-end items-center w-full h-16 px-5 mb-10 bg-blue-400 rounded-lg">
          <p className="text-white font-bold -tracking-tighter mr-5">{user.email}</p>
          <Button customClass="bg-slate-700" onClick={handleLogout}>Logout</Button>
        </div>
      )}
      <div className="flex justify-center items-center">
        {dataProducts.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title} price={product.price}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer />
          </CardProduct>
        ))}
      </div>
    </div>
  );
}
