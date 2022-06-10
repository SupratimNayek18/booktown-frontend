import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import CustomerRegistrationPage from "../pages/CustomerRegistrationPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminRegistrationPage from "../pages/AdminRegistrationPage";
import AddBookPage from "../pages/AddBookPage";
import AdminDashboard from "../pages/AdminDashboard";
import UpdateBookPage from "../pages/UpdateBookPage";
import Loader from "../pages/Loader";
import CustomerLoginPage from "../pages/CustomerLoginPage";

function Links() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<CustomerRegistrationPage />} />
        <Route path="/login" element={<CustomerLoginPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/registration" element={<AdminRegistrationPage />} />
        <Route path="/admin/addBook" element={<AddBookPage />} />
        <Route path="/admin/updateBook" element={<UpdateBookPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Links;
