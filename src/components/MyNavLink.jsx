import React from "react";
import { Link, useMatch, useParams } from "react-router-dom";
import classes from "./Navigation/Navigation.module.css";

export default function MyNavLink({ children, onClose, to }) {
  const navLinkClassName = [classes["nav-link"]];
  const { id } = useParams();
  const match = useMatch({
    path: to,
    end: !id,
  });
  return (
    <Link
      onClick={onClose}
      style={match && { color: "#5e96fc", fontWeight: 500 }}
      className={navLinkClassName.join(" ")}
      to={to}
    >
      {children}
    </Link>
  );
}
