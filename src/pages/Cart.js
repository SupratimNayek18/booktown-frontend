import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../Components/AdminHeader";
import CartItems from "../Components/CartItems";
import { login, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const user = useSelector(selectUser);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isLoggedIn) {
      if (localStorage.getItem("state") !== null) {
        const serializedState = localStorage.getItem("state");
        if (serializedState !== null) {
          const state = JSON.parse(serializedState);
          dispatch(
            login({
              id: state.id,
              name: state.name,
              isLoggedIn: state.isLoggedIn,
            })
          );
        }
      } else nav("/login");
    }
    axios
      .get("http://localhost:8080/book/getCart", {
        params: { customerId: user.id },
      })
      .catch((err) => console.log(err))
      .then((res) => setCartItems(res.data));
  });

  const emptyCart = () => {
    axios
      .delete("http://localhost:8080/book/emptyCart", {
        params: { customerId: user.id },
      })
      .catch((err) => console.log(err))
      .then((res) => console.log(res));
  };

  const order = () => {
    console.log(user.id);
    axios
      .post("http://localhost:8080/book/order", null, {
        params: { customerId: user.id },
      })
      .catch((err) => console.log(err))
      .then((res) => {
        const serializedOrder = JSON.stringify(res);
        localStorage.setItem("order", serializedOrder);
        nav("/order");
      });
  };

  return (
    <div>
      <AdminHeader name="Cart" />
      <CartItems data={cartItems} />
      {cartItems.length === 0 && (
        <h3 className="cartEmptyh3">Cart feels empty. Try adding something.</h3>
      )}
      {cartItems.length !== 0 && (
        <div className="cartOrderButtonDiv">
          <div className="emptyCart" onClick={emptyCart}>
            <Button variant="contained" color="error">
              Empty Cart
            </Button>
          </div>
          <div className="order" onClick={order}>
            <Button variant="contained" color="success">
              Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
