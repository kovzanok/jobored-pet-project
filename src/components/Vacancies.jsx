import React, { useContext } from "react";
import Search from "./Search/Search";
import VacanciesList from "./VacanciesList/VacanciesList";
import { VacanciesContext } from "../contexts/Contexts";
import NotFoundMessage from "./UI/NotFoundMessage";


export default function Vacancies() {
  const [vacancies, , isVacanciesLoading] = useContext(VacanciesContext);
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Search></Search>
      {vacancies.length === 0 && !isVacanciesLoading ? (
        <NotFoundMessage />
      ) : (
        <>
          <VacanciesList></VacanciesList>
        </>
      )}
    </div>
  );
}
