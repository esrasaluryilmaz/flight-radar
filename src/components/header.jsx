import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Ucus Radari</h2>
      </Link>

      <nav>
        <NavLink to={"/"}>
          <button>Harita</button>
        </NavLink>

        <NavLink to="/list">
          <button>Liste</button>
        </NavLink>

        <h3>
          {isLoading
            ? "Radar Calisiyor.."
            : error
            ? "Bir sorun olustu"
            : `${flights.length}ucus bulundu.`}{" "}
        </h3>
      </nav>
    </header>
  );
};

export default Header;
