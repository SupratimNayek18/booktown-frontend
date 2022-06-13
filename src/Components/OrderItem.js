import React from "react";

function OrderItem(props) {
  return (
    <div className="cartItem">
      <p>Book Name : {props.data.bookName}</p>
      <p>Quantity : {props.data.quantity}</p>
    </div>
  );
}

export default OrderItem;
