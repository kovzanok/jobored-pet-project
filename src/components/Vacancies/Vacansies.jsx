import React from "react";
import Search from "../Search/Search";
import VacanciesList from "../VacanciesList/VacanciesList";

export default function Vacansies() {
  return (
    <div style={{ flex: 1 }}>
      <Search></Search>
      <VacanciesList></VacanciesList>
      
    </div>
  );
}
