import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminHeader from "../Components/AdminHeader";
import CartItems from "../Components/CartItems";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const user = useSelector(selectUser);
  const nav = useNavigate();

  useEffect(() => {
    if (!user.isLoggedIn) nav("/login");
    axios
      .get("http://localhost:8080/book/getCart", {
        params: { customerId: user.id },
      })
      .catch((err) => console.log(err))
      .then((res) => setCartItems(res.data));
  }, []);

  const emptyCart = () => {
    axios
      .delete("http://localhost:8080/book/emptyCart", {
        params: { customerId: user.id },
      })
      .catch((err) => console.log(err))
      .then((res) => console.log(res));
  };

  return (
    <div>
      <AdminHeader name="Cart" />
      <CartItems data={cartItems} />
      {cartItems.length === 0 && (
        <h3 className="cartEmptyh3">Cart feels empty. Try adding something.</h3>
      )}
      {cartItems.length !== 0 && (
        <div className="emptyCart" onClick={emptyCart}>
          <Button variant="contained" color="error">
            Empty Cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
