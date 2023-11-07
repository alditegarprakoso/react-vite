import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: false,
  },
  reducers: {
    isLogin: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer
  },
});

// Subscribe
store.subscribe(() => {
  console.log("State : ", store.getState());
});

// Dispatch
const action1 = cartSlice.actions.addToCart({ id: 1, name: "Product 1", price: 100 });
store.dispatch(action1);

const action2 = loginSlice.actions.isLogin(true);
store.dispatch(action2);