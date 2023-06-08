
const ADD_TO_SHOPING_CART = 'cart/addItemToCart';
export const addToShopingCart = (payload) => ({ type: ADD_TO_SHOPING_CART, payload });

export const reducer = (state = { amount: 0 }, action) => {
    switch (action.type) {
      case ADD_TO_SHOPING_CART:
        return { ...state, amount: action.payload };
      default:
        return state;
    }
  };

export const getProductByIdMap = state => new Map([]);
