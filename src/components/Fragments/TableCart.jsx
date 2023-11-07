import { useDispatch, useSelector } from "react-redux";
import Button from "../Elements/Button";
import { useEffect, useState } from "react";
import { deleteCart } from "../../redux/slices/cartSlice";

function TableCart() {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((total, item) => total + item.price * item.qty, 0));
  }, [cart]);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="h-[500px] overflow-y-auto">
          <div className="sticky top-0">
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
                        onClick={() => dispatch(deleteCart(index))}
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
        </div>
      ) : (
        <p className="text-blue-400 font-bold text-4xl mb-5">Cart Empty</p>
      )}
    </>
  );
}

export default TableCart;
