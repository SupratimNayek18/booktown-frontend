import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function CustomerHeader(props) {
  const user = useSelector(selectUser);
  const nav = useNavigate();

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
