import MyHeader from "./MyHeader/MyHeader.jsx";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MyHeader></MyHeader>
      <Outlet />      
    </>
  );
}
