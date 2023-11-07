import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import Button from "../components/Elements/Button";
import Modal from "../components/Elements/Modal";
import Spinner from "../components/Elements/Spinner";

export default function DetailProductPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    getDetailProduct(productId, (data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [productId]);

  return (
    <>
      {loading ? (
        <Modal>
          <Spinner />
        </Modal>
      ) : (
        <div className="m-48 mx-96">
          <Button
            onClick={() => navigate("/products")}
            color="bg-blue-400"
            customClass="mb-5"
          >
            Kembali
          </Button>
          <div className="border-2 border-blue-400 rounded-xl flex">
            <div className="flex-none w-48 relative p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <h1 className="text-xl font-semibold text-slate-900">
                {product.title}
              </h1>
              <p className="text-sm text-slate-700 my-6">
                {product.description}
              </p>
              <p className="text-lg font-semibold text-slate-500">
                ${product.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
