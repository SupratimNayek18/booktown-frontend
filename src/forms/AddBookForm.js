import React from "react";
import Header from "../Components/Header";
import BookDetails from "./form-details/BookDetails";

function AddBookForm() {
  return (
    <div>
      <Header name="Add Book Form" />
      <BookDetails />
    </div>
  );
}

export default AddBookForm;
