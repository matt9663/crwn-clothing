import { createSelector } from "reselect";

// input selector
const selectCart = (state) => state.cart;

// output selector, using createSelector from Reselect automatically memoizes this selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);
