const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)]
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.id !== action.payload.id
              ? item
              : { ...item, qty: action.payload.qty }
          )
        ]
      };
    default:
      return state;
  }
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "BY_PRICE":
      return {
        ...state,
        byPrice: action.payload
      };
    case "BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock
      };
    case "BY_FAST_DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery
      };
    case "BY_RATING":
      return {
        ...state,
        byRating: action.payload
      };
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byPrice: undefined,
        byRating: undefined
      };
    default:
      return state;
  }
};

export { CartReducer, FilterReducer };
