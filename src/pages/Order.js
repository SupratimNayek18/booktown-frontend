import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import OrderItem from "../Components/OrderItem";

function Order() {
  const serializedOrder = localStorage.getItem("order");
  const order = JSON.parse(serializedOrder);
  console.log(order);

  return (
    <div>
      <AdminHeader name="Orders" />
      {order ? (
        <div className="recentOrders">
          <h2 className="recentOrderHeader">Your Recent Order</h2>
          <div className="orderItems">
            {order.data.orderItems.map(function (item) {
              return <OrderItem data={item} />;
            })}
          </div>
          <p className="orderPrice">Total Price: {order.data.price}</p>
        </div>
      ) : (
        <h3>No Recent Order</h3>
      )}
    </div>
  );
}

export default Order;
