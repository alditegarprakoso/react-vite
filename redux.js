import { legacy_createStore } from "redux";

// Reducer
const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            return state;
    }
};

// Store
const store = legacy_createStore(cartReducer);
console.log("on create store :", store.getState());

// Subcribe
store.subscribe(() => {
    console.log("on subcribe :", store.getState());
})

// Dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: {
        id: 1,
        name: "Product 1",
        price: 100,
    },
}
store.dispatch(action1);