import React from "react";
import { Link } from "react-router-dom";

const UserNav = ({ url }) => {
  return (
    <nav className="bg-dark rounded">
      <ul className="nav flex-column">
        <li className="nav-items">
          <Link to={url} className="nav-link text-info">
            Accueil
          </Link>
        </li>
        <li className="nav-items">
          <Link to={`${url}/password`} className="nav-link text-info">
            {" "}
            Mot de passe{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
