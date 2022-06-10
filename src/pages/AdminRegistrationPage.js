import React from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminRegistrationDetails from "../forms/AdminRegistrationDetails";

function AdminRegistrationForm() {
  return (
    <div>
      <AdminHeader name="Admin Registration" />
      <AdminRegistrationDetails />
    </div>
  );
}

export default AdminRegistrationForm;
