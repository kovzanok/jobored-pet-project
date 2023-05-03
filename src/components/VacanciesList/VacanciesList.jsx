import React, { useContext } from "react";
import Vacancy from "../Vacancy";
import { List } from "@mantine/core";
import classes from "./VacanciesList.module.css";
import { VacanciesContext } from "../../context/VacancyContext";

export default function VacanciesList() {
  const [vacancies] = useContext(VacanciesContext);
  return (
    <List
      classNames={{
        itemWrapper: classes["wrapper"],
      }}
      mt="16px"
      spacing="xl"
      listStyleType="none"
    >
      {vacancies.map((vacancy) => {
        const { profession, town, type_of_work,payment_from, payment_to, currency } = vacancy;
        return (
          <List.Item key={vacancy.id}>
            <Vacancy
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
    </List>
  );
}
