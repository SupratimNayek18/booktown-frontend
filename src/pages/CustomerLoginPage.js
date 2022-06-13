import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../Components/AdminHeader";
import CustomerLoginForm from "../forms/CustomerLoginForm";
function CustomerLoginPage() {
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("state") !== null) nav("/");
  });

  return (
    <div>
      <AdminHeader name="Customer Login" />
      <CustomerLoginForm />
    </div>
  );
}

export default CustomerLoginPage;
