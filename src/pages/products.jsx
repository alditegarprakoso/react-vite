import { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import Modal from "../components/Elements/Modal";
import Spinner from "../components/Elements/Spinner";
import TableCart from "../components/Fragments/TableCart";
import NavbarLayout from "../components/Layouts/NavbarLayout";

export default function ProductsPage() {
  const [loading, setLoading] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);

  useLogin();

  useEffect(() => {
    setLoading(true);
    getProducts((data) => {
      setDataProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Modal>
          <Spinner />
        </Modal>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen overflow-x-hidden">
          <NavbarLayout />
          {dataProducts.length > 0 && (
            <div className="flex justify-center w-full px-10 py-8">
              <div className="flex flex-wrap w-7/12">
                {dataProducts.map((product) => (
                  <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} id={product.id} />
                    <CardProduct.Body
                      title={product.title}
                      price={product.price}
                    >
                      {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer product={product} />
                  </CardProduct>
                ))}
              </div>
              <div className="w-5/12 p-5">
                <TableCart />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
