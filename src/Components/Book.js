import React from "react";
import "../css/Book.css";

function Book(props) {
  console.log(props.data);
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
                <button type="button" className="addToCart">
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
