import React from "react";
import CustomerDetails from "./form-details/CustomerDetails";
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
