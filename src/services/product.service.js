import axios from "axios";

export const getProducts = async (callback) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    callback(data)
  } catch (error) {
    console.log(error)
  }
};
