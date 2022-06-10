import React from "react";
import AdminHeader from "../Components/AdminHeader";
import CustomerLoginForm from "../forms/CustomerLoginForm";
function CustomerLoginPage() {
  return (
    <div>
      <AdminHeader name="Customer Login" />
      <CustomerLoginForm />
    </div>
  );
}

export default CustomerLoginPage;
