import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/Book.css";
import userSlice, { selectUser } from "../features/userSlice";

function Book(props) {
  const user = useSelector(selectUser);
  const nav = useNavigate();

  const addToCart = () => {
    if (!user.isLoggedIn) nav("/login");
    axios
      .post("http://localhost:8080/book/addToCart", null, {
        params: { bookId: props.data.bookId, customerId: user.id },
      })
      .catch((err) => console.log(err))
      .then((res) => console.log(res));
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-head">
            <img src={props.data.imageUrl} alt="logo" class="card-logo" />
          </div>
          <div className="card-body">
            <div className="product-desc">
              <span className="product-title">{props.data.title}</span>
              <span className="product-author">{props.data.author}</span>
            </div>
            <div className="product-properties">
              <span className="product-price">
                ₹<b>{props.data.price}</b>
              </span>
              <div>
                <button type="button" className="addToCart" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
