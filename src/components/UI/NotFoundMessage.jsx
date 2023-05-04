import React from "react";

export default function NotFoundMessage() {
  return (
    <>
      <img
        style={{ marginTop: "80px", marginBottom: "32px" }}
        src="/src/assets/not-found.svg"
      />
      <h2 style={{ fontSize: "2.4rem" }}>Упс, здесь еще ничего нет!</h2>
    </>
  );
}
