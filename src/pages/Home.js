import axios from "axios";
import React, { useEffect, useState } from "react";
import Books from "../Components/Books";
import Header from "../Components/Header";

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/getBooks",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch(function (err) {
        if (err.response) {
          setError(err.response.data);
        }
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <Header name="The Booktown" />
      {error && <Books error={error} />}
      {data && <Books data={data} />}
    </div>
  );
}

export default Home;
