import CardProduct from "../components/Fragments/CardProduct";

export default function ProductsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.webp" />
        <CardProduct.Body title="New Balance" price="100.000">
          New Balance is the best brand
        </CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.webp" />
        <CardProduct.Body title="Adidas" price="150.000">
          Adidas is the best brand
        </CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>
    </div>
  );
}
