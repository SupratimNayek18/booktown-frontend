import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminHeader from "../Components/AdminHeader";
import CartItems from "../Components/CartItems";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  return (
    <div>
      <AdminHeader name="Cart" />
      <CartItems data={cartItems} />
    </div>
  );
}

export default Cart;
