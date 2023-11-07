import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

// Action
const addToCart = createAction("ADD_TO_CART");
const loginAction = createAction("IS_LOGIN");

// ===================================================================================================================

// Reducer

// Array kosong [] itu merupakan state awal
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload); // Menambahkan action.payload pada state array kosong []
  });
});

// false itu state awal
const loginReducer = createReducer({status : false}, (builder) => {
  builder.addCase(loginAction, (state, action) => {
    state.status = action.payload;
  });
});

// ===================================================================================================================

// Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

// ===================================================================================================================

// Subscribe
store.subscribe(() => {
  console.log("State : ", store.getState());
});

// ===================================================================================================================

// Dispatch
const action1 = addToCart({ id: 1, name: "Product 1", price: 100 });
store.dispatch(action1);

const loginTrue = loginAction(true);
store.dispatch(loginTrue);