import React from "react";
import CustomerDetails from "../forms/CustomerDetails";
import AdminHeader from "../Components/AdminHeader";

function CustomerRegistrationForm() {
  return (
    <div>
      <AdminHeader name="Customer Registration" />
      <CustomerDetails />
    </div>
  );
}

export default CustomerRegistrationForm;
