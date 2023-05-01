import React from "react";
import clases from "./Logo.module.css";

export default function Logo() {
  return (
    <span className={clases["logo"]}>
      <img src="../../../../public/logo.svg"></img>
      <span className={clases["logo__text"]}>Jobored</span>
    </span>
  );
}
