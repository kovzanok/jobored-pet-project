import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mantine/core";
import VacanciesList from "../components/VacanciesList/VacanciesList";
import NotFoundMessage from "../components/UI/NotFoundMessage";
import { VacanciesContext, ActiveVacanciesContext } from "../contexts/Contexts";
import { Link, useSearchParams } from "react-router-dom";

export default function FavouritePage() {
  const [activeVacancies, setActiveVacancies] = useContext(
    ActiveVacanciesContext
  );
  const [vacancies, setVacancies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isVacanciesLoading, setIsVacanciesLoading] = useState(true);
  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    const sentPage = Math.floor(Math.abs(page / 5 - 0.1));
    
    const newVacancies = activeVacancies.slice(
      sentPage * 20,
      sentPage * 20 + 19
    );
    setVacancies(newVacancies);
    setIsVacanciesLoading(false);
  }, [searchParams,activeVacancies]);
  return (
    <VacanciesContext.Provider
      value={[
        vacancies,
        setVacancies,
        isVacanciesLoading,
        setIsVacanciesLoading,
      ]}
    >
      <Container ta="center" size="773px" py="40px">
        {activeVacancies.length === 0 ? (
          <>
            <NotFoundMessage />
            <Link
              style={{
                marginTop: "32px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                width: "164px",
                height: "42px",
                textDecoration: "none",
                display: "inline-flex",
                background: "#DEECFF",
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#3B7CD3",
              }}
              to="/"
            >
              Поиск Вакансий
            </Link>
          </>
        ) : (
          <VacanciesList />
        )}
      </Container>
    </VacanciesContext.Provider>
  );
}
