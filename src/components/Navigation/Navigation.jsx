import React from "react";
import classes from "./Navigation.module.css";
import MyNavLink from "../MyNavLink";
export default function Navigation({ onClose }) {
  return (
    <nav className={classes["nav"]}>
      <MyNavLink onClose={onClose} to="/">
        Поиск Вакансий
      </MyNavLink>
      <MyNavLink onClose={onClose} to="/favourites">
        Избранное
      </MyNavLink>
    </nav>
  );
}
