import React from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminLoginDetails from "../forms/AdminLoginDetails";

function AdminLoginForm() {
  return (
    <div>
      <AdminHeader name="Admin Login" />
      <AdminLoginDetails />
    </div>
  );
}

export default AdminLoginForm;
