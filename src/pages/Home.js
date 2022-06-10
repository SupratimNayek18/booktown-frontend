import axios from "axios";
import React, { useEffect, useState } from "react";
import Books from "../Components/Books";
import CustomerHeader from "../Components/CustomerHeader";

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
      <CustomerHeader name="The Booktown" />
      {error && <Books error={error} />}
      {data && <Books data={data} />}
    </div>
  );
}

export default Home;
