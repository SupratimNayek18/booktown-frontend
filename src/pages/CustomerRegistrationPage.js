import React from "react";
import CustomerDetails from "../forms/CustomerDetails";
import Header from "../Components/Header";

function CustomerRegistrationForm() {
  return (
    <div>
      <Header name="Customer Registration" />
      <CustomerDetails />
    </div>
  );
}

export default CustomerRegistrationForm;
