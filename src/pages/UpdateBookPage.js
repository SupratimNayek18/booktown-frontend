import React from "react";
import AdminHeader from "../Components/AdminHeader";
import UpdateBookForm from "../forms/UpdateBookForm";

function UpdateBookPage() {
  return (
    <div>
      <AdminHeader name="Update Book" />
      <UpdateBookForm />
    </div>
  );
}

export default UpdateBookPage;
