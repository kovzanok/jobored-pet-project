import React from "react";

import img from '../../assets/not-found.svg'

export default function NotFoundMessage() {
  return (
    <>
      <img
        style={{ marginTop: "80px", marginBottom: "32px" }}
        src={img}
      />
      <h2 style={{ fontSize: "2.4rem" }}>Упс, здесь еще ничего нет!</h2>
    </>
  );
}
