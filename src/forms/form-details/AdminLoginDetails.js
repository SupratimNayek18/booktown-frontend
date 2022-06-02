import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";

function AdminLoginDetails() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: username,
      password: password,
    };

    axios({
      method: "post",
      url: "http://localhost:8080/admin/login",
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
        dispatch(
          login({
            name: response.data.name,
            isLoggedIn: true,
          })
        );
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-body">
        <p className="errorMessage">{error}</p>
        <p>{user.isLoggedIn ? user.name + " Login Successfull" : ""}</p>
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
        <button type="submit" class="login-button">
          Login
        </button>
        <a href="/admin/registration" type="submit" class="register-button">
          Register Here
        </a>
      </div>
    </form>
  );
}

export default AdminLoginDetails;
