import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>

      {!token ? (
        <>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/appointments" style={{ marginRight: "10px" }}>
            My Appointments
          </Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Navbar;
