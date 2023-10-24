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
  return (
    <div className="flex justify-center items-center min-h-screen mx-5">
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
  );
}
