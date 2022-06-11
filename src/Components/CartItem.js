import React from "react";

function CartItem({ data }) {
  return (
    <div>
      <div className="cartItem">
        <p>Book Name : {data.bookName}</p>
        <p>Quantity : {data.quantity}</p>
        <p>Price : ₹{data.price}</p>
      </div>
    </div>
  );
}

export default CartItem;
