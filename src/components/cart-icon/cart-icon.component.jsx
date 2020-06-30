import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({ hidden, toggleCartVisibility }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartVisibility(hidden)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: (hidden) => dispatch(toggleCartVisibility(hidden)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
