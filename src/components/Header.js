import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <ul className="container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
