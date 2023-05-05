import React, { useContext, useState } from "react";
import Vacancy from "../Vacancy";
import { List, Loader } from "@mantine/core";
import classes from "./VacanciesList.module.css";
import { VacanciesContext, VacancyContext } from "../../contexts/Contexts";
import { Pagination } from "@mantine/core";

export default function VacanciesList() {
  const [activePage, setActivePage] = useState(1);
  const [vacancies, , isVacanciesLoading] = useContext(VacanciesContext);
  return (
    <>
      <List
        classNames={{
          itemWrapper: classes["wrapper"],
        }}
        mt="16px"
        spacing="xl"
        w="100%"
        listStyleType="none"
      >
        {isVacanciesLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Loader size="10rem" />
          </div>
        ) : (
          <>
            {vacancies
              .slice((activePage - 1) * 4, (activePage - 1) * 4 + 4)
              .map((vacancy) => {
                return (
                  <VacancyContext.Provider key={vacancy.id} value={vacancy}>
                    <List.Item>
                      <Vacancy></Vacancy>
                    </List.Item>
                  </VacancyContext.Provider>
                );
              })}
            <Pagination
              styles={{
                control: {
                  fontSize: "1.4rem",
                  width: "32px",
                  "&[data-active]": {
                    backgroundColor: "#5E96FC",
                  },
                },
              }}
              mt="40px"
              mb="44px"
              size="3.2rem"
              spacing="0.8rem"
              position="center"
              value={activePage}
              onChange={setActivePage}
              total={Math.min(Math.ceil(vacancies.length / 4), 3)}
            />
          </>
        )}
      </List>
    </>
  );
}
