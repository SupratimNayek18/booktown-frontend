import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function CustomerHeader(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (!user.isLoggedIn) {
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
    }
  });

  const logoutFunction = () => {
    localStorage.removeItem("state");
    if (localStorage.getItem("order") !== null)
      localStorage.removeItem("order");
    dispatch(logout);
  };

  const redirectToCart = () => {
    nav("/cart");
  };

  return (
    <nav className="bg-dark navbar-dark navbar">
      <div className="row col-12 d-flex justify-content-center text-white">
        <h3>{props.name}</h3>
        {!user.isLoggedIn ? (
          <div className="loginRegister">
            <a href="/login" className="loginHeader">
              Login
            </a>
            <a href="/registration" className="loginHeader">
              Register
            </a>
          </div>
        ) : (
          <div className="postLoggedInDiv">
            <p className="userName">{user.name}</p>
            <p className="userName" onClick={logoutFunction}>
              Logout
            </p>
            <div className="cartIcon" onClick={redirectToCart}>
              <ShoppingCartIcon />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default CustomerHeader;
