import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBookForm from "../forms/AddBookForm";
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
        <Route path="/admin/addBook" element={<AddBookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Links;
