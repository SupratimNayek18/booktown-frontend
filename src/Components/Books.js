import React from "react";
import Book from "./Book";

function Books(props) {
  // return <div>{props.error && <p className="homeError">{props.error}</p>}</div>;
  return (
    <div>
      <div className="book">
        {props.data.map(function (item, i) {
          return <Book data={item} />;
        })}
      </div>
    </div>
  );
}

export default Books;
