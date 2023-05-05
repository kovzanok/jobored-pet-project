import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
export default function Navigation({onClose}) {
  const setActive = ({ isActive }) => {
    const navLinkClassName = [classes["nav-link"]];
    if (isActive) {
      navLinkClassName.push(classes["nav-link_active"]);
    }
    return navLinkClassName.join(' ');
  };

  return (
    <nav className={classes["nav"]}>
      <NavLink onClick={onClose} className={setActive} to="/">
        Поиск Вакансий
      </NavLink>
      <NavLink onClick={onClose} className={setActive} to="/favourites">
        Избранное
      </NavLink>
    </nav>
  );
}
