export const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find((item) => item.id === newItem.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const subtractItemFromCart = (cartItems, removedItem) => {
  const existingCartItem = cartItems.find((item) => item.id === removedItem.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removedItem.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === removedItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
