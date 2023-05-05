import React, { useContext } from "react";
import { Container } from "@mantine/core";
import VacanciesList from "../components/VacanciesList/VacanciesList";
import NotFoundMessage from "../components/UI/NotFoundMessage";
import {
  VacanciesContext,
  ActiveVacanciesContext,
} from "../contexts/Contexts";
import { Link } from "react-router-dom";

export default function FavouritePage() {
  const [activeVacancies, setActiveVacancies] = useContext(
    ActiveVacanciesContext
  );

  return (
    <VacanciesContext.Provider value={[activeVacancies, setActiveVacancies]}>
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
