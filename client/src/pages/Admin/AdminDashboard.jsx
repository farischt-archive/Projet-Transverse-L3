import React from "react";

import AdminNav from "../../components/Nav/AdminNav";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          {" "}
          <AdminNav />{" "}
        </div>
        <div className="col">
          <h1> Dashboard </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
