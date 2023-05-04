import React, { useContext, useState } from "react";
import Vacancy from "../Vacancy";
import { List, Loader } from "@mantine/core";
import classes from "./VacanciesList.module.css";
import { VacanciesContext, VacancyContext } from "../../context/VacancyContext";
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
            {vacancies.slice((activePage - 1) * 4,((activePage - 1) * 4)+4).map((vacancy) => {
              const {
                profession,
                town,
                type_of_work,
                payment_from,
                payment_to,
                currency,
              } = vacancy;
              return (
                <VacancyContext.Provider key={vacancy.id} value={vacancy}>
                  <List.Item>
                    <Vacancy
                      id={vacancy.id}
                      profession={profession}
                      town={town.title}
                      typeOfWork={type_of_work.title}
                      paymentFrom={payment_from}
                      paymentTo={payment_to}
                      currency={currency}
                    ></Vacancy>
                  </List.Item>
                </VacancyContext.Provider>
              );
            })}
            <Pagination
              mt="40px"
              mb="44px"
              size="xl"
              position="center"
              value={activePage}
              onChange={setActivePage}
              total={Math.ceil(vacancies.length / 4)}
            />
          </>
        )}
      </List>
    </>
  );
}
