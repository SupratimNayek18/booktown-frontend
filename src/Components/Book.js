import React from "react";
import "../css/Book.css";

function Book() {
  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="card-head">
            <img
              src="https://pngimg.com/uploads/book/book_PNG2111.png"
              alt="logo"
              class="card-logo"
            />
          </div>
          <div class="card-body">
            <div class="product-desc">
              <span class="product-title">Coffee Can Investing</span>
            </div>
            <div class="product-properties">
              <span class="product-price">
                ₹<b>23,453</b>
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
