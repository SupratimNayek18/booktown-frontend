import React from "react";
import AdminHeader from "../Components/AdminHeader";
import BookDetails from "../forms/BookDetails";

function AddBookForm() {
  return (
    <div>
      <AdminHeader name="Add Book Form" />
      <BookDetails />
    </div>
  );
}

export default AddBookForm;
