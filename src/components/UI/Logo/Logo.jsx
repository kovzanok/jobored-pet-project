import React from "react";
import clases from "./Logo.module.css";
import logo from '../../../assets/logo.svg'

export default function Logo() {
  return (
    <span className={clases["logo"]}>
      <img src={logo}></img>
      <span className={clases["logo__text"]}>Jobored</span>
    </span>
  );
}
