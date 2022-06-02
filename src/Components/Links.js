import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLoginForm from "../forms/AdminLoginForm";
import AdminRegistrationForm from "../forms/AdminRegistrationForm";
import CustomerRegistrationForm from "../forms/CustomerRegistrationForm";

function Links() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<CustomerRegistrationForm />} />
        <Route path="/admin/login" element={<AdminLoginForm />} />
        <Route path="/admin/registration" element={<AdminRegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Links;
