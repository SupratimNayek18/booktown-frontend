import React, { useState } from "react";
import axios from "axios";

function CustomerDetails() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      name: name,
      address: address,
      country: country,
      email: email,
      username: username,
      password: password,
    };

    axios({
      method: "post",
      url: "http://localhost:8080/register",
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
      .then((response) => console.log(response));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-body">
        <p className="errorMessage">{error}</p>
        <div className="username">
          <label className="form__label" for="name">
            Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="address">
          <label className="form__label" for="address">
            Address{" "}
          </label>
          <input
            id="address"
            className="form__input"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="country">
          <label className="form__label" for="country">
            Country{" "}
          </label>
          <input
            id="country"
            className="form__input"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="username">
          <label className="form__label" for="username">
            Username{" "}
          </label>
          <input
            id="username"
            className="form__input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="register-button">
          Register
        </button>
      </div>
    </form>
  );
}

export default CustomerDetails;
