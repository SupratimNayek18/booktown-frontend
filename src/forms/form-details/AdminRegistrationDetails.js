import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegistrationDetails() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      name: name,
      username: username,
      password: password,
    };

    axios({
      method: "post",
      url: "http://localhost:8080/admin/register",
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
      .then((response) => {
        console.log(response);
        setResponse(response);
      });

    nav("/admin/login");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-body">
        <p className="errorMessage">{error}</p>
        <p>{response}</p>
        <div className="name">
          <label className="form__label" for="name">
            Name{" "}
          </label>
          <input
            id="name"
            className="form__input"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
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
      </div>
      <div class="footer">
        <button type="submit" class="register-button">
          Register
        </button>
      </div>
    </form>
  );
}

export default AdminRegistrationDetails;
