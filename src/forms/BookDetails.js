import axios from "axios";
import React, { useState } from "react";

function BookDetails() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [audiobookUrl, setAudiobookUrl] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState();
  const [stock, setStock] = useState(0);
  const [response, setResponse] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const isbns = document.getElementsByName("array[]");
    const isbnListDom = [];
    isbns.forEach((value) => isbnListDom.push(value.value));

    const payload = {
      title: title,
      description: description,
      isbnList: isbnListDom,
      author: author,
      price: price,
      audiobookUrl: audiobookUrl,
      imageUrl: imageUrl,
    };

    axios({
      method: "post",
      url: "http://localhost:8080/admin/addBook",
      data: payload, // you are sending body instead
      headers: {
        // 'Authorization': `bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data);
        }
      })
      .then((res) => {
        setResponse(res);
        console.log(res);
      });
  };

  const changeStocks = () => {
    setStock(prompt("Enter stocks"));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {response ? <p className="response">Book added successfully</p> : ""}
      <div className="form-body">
        <p className="errorMessage">{error}</p>
        <div className="title">
          <label className="form__label" htmlFor="title">
            Title{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="description">
          <label className="form__label" htmlFor="description">
            Description{" "}
          </label>
          <input
            id="description"
            className="form__input"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="author">
          <label className="form__label" htmlFor="author">
            Author{" "}
          </label>
          <input
            id="author"
            className="form__input"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="price">
          <label className="form__label" htmlFor="price">
            Price{" "}
          </label>
          <input
            type="number"
            id="price"
            className="form__input"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="audiobookUrl">
          <label className="form__label" htmlFor="audiobookUrl">
            Audiobook Url{" "}
          </label>
          <input
            id="audiobookUrl"
            className="form__input"
            placeholder="Audiobook Url"
            onChange={(e) => setAudiobookUrl(e.target.value)}
          />
        </div>
        <div className="imageUrl">
          <label className="form__label" htmlFor="imageUrl">
            Image Url{" "}
          </label>
          <input
            className="form__input"
            id="imageUrl"
            placeholder="Image Url"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="addStockDiv">
          <button
            className="changeStocksButton"
            type="button"
            onClick={changeStocks}
          >
            Change Stocks
          </button>
        </div>
        <div className="isbns">
          {Array.apply(null, { length: stock }).map((e, i) => (
            <div>
              <label className="form__label">ISBN</label>
              <input name="array[]" />
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="register-button">
          Add Book
        </button>
      </div>
    </form>
  );
}

export default BookDetails;
