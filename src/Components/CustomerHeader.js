import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function CustomerHeader(props) {
  const user = useSelector(selectUser);
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
          ""
        )}
      </div>
    </nav>
  );
}
export default CustomerHeader;
