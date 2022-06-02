import React from "react";
import Header from "../Components/Header";
import AdminLoginDetails from "./form-details/AdminLoginDetails";

function AdminLoginForm() {
  return (
    <div>
      <Header name="Admin Login" />
      <AdminLoginDetails />
    </div>
  );
}

export default AdminLoginForm;
