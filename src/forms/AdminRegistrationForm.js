import React from "react";
import Header from "../Components/Header";
import AdminRegistrationDetails from "./form-details/AdminRegistrationDetails";

function AdminRegistrationForm() {
  return (
    <div>
      <Header name="Admin Registration" />
      <AdminRegistrationDetails />
    </div>
  );
}

export default AdminRegistrationForm;
