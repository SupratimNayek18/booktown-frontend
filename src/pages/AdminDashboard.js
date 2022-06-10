import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../Components/AdminHeader";

function AdminDashboard() {
  const user = useSelector(selectUser);
  const nav = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) nav("/admin/login");
  });

  return (
    <div>
      <AdminHeader name="Admin Dashboard" />
      <div className="dashboardContainer">
        <button
          type="button"
          className="adminDashboardCard"
          onClick={() => {
            nav("/admin/addBook");
          }}
        >
          Add Book
        </button>
        <button
          type="button"
          className="adminDashboardCard"
          onClick={() => nav("/admin/updateBook")}
        >
          Update Book
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
