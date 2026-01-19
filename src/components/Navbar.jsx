import { NavLink } from "react-router-dom";
import "../App.css";
import {useContext} from "react";
import { AppContext } from "../context/appContext";

const Navbar = () => {
  const {appName}=useContext(AppContext);
  return (
    <nav className="navbar">
      <h2 className="logo">{appName}</h2>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/tips">Tips</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
