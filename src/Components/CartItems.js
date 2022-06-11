import React from "react";
import CartItem from "./CartItem";

function CartItems(props) {
  return (
    <div className="cartItems">
      {props.data.map(function (item, i) {
        return <CartItem data={item} />;
      })}
    </div>
  );
}

export default CartItems;
