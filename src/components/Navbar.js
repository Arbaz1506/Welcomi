import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Navbar = ({ isLoggedIn, setLoggedin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedin(false);
    toast.success('Logged out!');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="left-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </div>

      <div className="right-links">
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
