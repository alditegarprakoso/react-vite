import axios from "axios";

export const getProducts = async (callback) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts2 = async (callback) => {
  const controller = new AbortController();

  axios
    .get("https://fakestoreapi.com/products", {
      signal: controller.signal,
    })
    .then(function (response) {
      callback(response.data);
    });

  controller.abort();
};
