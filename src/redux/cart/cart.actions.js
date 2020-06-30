import { CartActionTypes } from "./cart.types";

export const toggleCartVisibility = (hidden) => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY,
  payload: !hidden,
});
