import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

export default function ProductsPage() {
  const token = JSON.parse(localStorage.getItem("user"));
  const [dataProducts, setDataProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState("");

  if (!token) {
    window.location.href = "/login";
  }

  useEffect(() => {
    getProducts((data) => {
      setDataProducts(data);
    });
  }, []);

  useEffect(() => {
    setUser(getUsername(token.token));
  }, []);

  useEffect(() => {
    setTotal(cart.reduce((total, item) => total + item.price * item.qty, 0));
  }, [cart]);

  function handleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  function handleAddToCart(product) {
    if (cart.find((item) => item.id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function handleDelete(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen overflow-x-hidden">
      {user && (
        <div className="flex justify-end items-center w-full h-16 px-5 mb-5 bg-blue-400 sticky top-0">
          <p className="text-white font-bold -tracking-tighter mr-5">{user}</p>
          <Button customClass="bg-slate-700" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
      {dataProducts.length > 0 && (
        <div className="flex justify-center w-full px-10 py-8">
          <div className="flex flex-wrap w-7/12">
            {dataProducts.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body title={product.title} price={product.price}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  isClick={handleAddToCart}
                  product={product}
                />
              </CardProduct>
            ))}
          </div>
          <div className="w-5/12 p-5">
            {cart.length !== 0 ? (
              <div className="h-[500px] overflow-y-auto">
                <p className="text-blue-400 font-bold text-4xl mb-5">Cart</p>
                <p className="mb-3">Your Products :</p>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No
                      </th>
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        QTY Order
                      </th>
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Price
                      </th>
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="px-2 text-center py-4 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-2 text-center py-4 whitespace-nowrap">
                          {item.title.slice(0, 15) + "..."}
                        </td>
                        <td className="px-2 text-center py-4 whitespace-nowrap">
                          {item.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </td>
                        <td className="px-2 text-center whitespace-nowrap">
                          {item.qty}
                        </td>
                        <td className="px-2 text-center whitespace-nowrap">
                          {(item.qty * item.price).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </td>
                        <td className="px-2 text-center py-4 whitespace-nowrap">
                          <Button
                            color="bg-red-500"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {total > 0 && (
                  <div className="mt-1 sticky bottom-0 bg-blue-400 p-3 text-white">
                    <p>Total Price :</p>
                    <p className="font-bold text-lg">
                      {total.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-blue-400 font-bold text-4xl mb-5">
                Cart Empty
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
