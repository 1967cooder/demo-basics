import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <h1>Logo</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </header>
  );
};

export default Header;
