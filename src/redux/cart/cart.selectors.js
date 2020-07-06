import { createSelector } from "reselect";

// input selector
const selectCart = (state) => state.cart;

// output selector, using createSelector from Reselect automatically memoizes this selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
);
