import React, { useContext } from "react";
import Vacancy from "../Vacancy";
import { List, Loader } from "@mantine/core";
import classes from "./VacanciesList.module.css";
import { VacanciesContext } from "../../context/VacancyContext";
import { Pagination } from "@mantine/core";

export default function VacanciesList() {
  const [vacancies, , isVacanciesLoading] = useContext(VacanciesContext);
  return (
    <>
      <List
        classNames={{
          itemWrapper: classes["wrapper"],
        }}
        mt="16px"
        spacing="xl"
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
            {vacancies.map((vacancy) => {
              const {
                profession,
                town,
                type_of_work,
                payment_from,
                payment_to,
                currency,
              } = vacancy;
              return (
                <List.Item key={vacancy.id}>
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
              );
            })}
            <Pagination mb="44px" size="xl" position="center" total={3} />
          </>
        )}
      </List>
    </>
  );
}
