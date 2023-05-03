import React from "react";
import Vacancy from "../Vacancy";
import { List } from "@mantine/core";
import classes from "./VacanciesList.module.css";

export default function VacanciesList() {
  return (
    <List
      classNames={{
        itemWrapper: classes["wrapper"],
      }}
      mt="16px"
      spacing="xl"
      listStyleType="none"
    >
      <List.Item>
        <Vacancy></Vacancy>
      </List.Item>
      <List.Item>
        <Vacancy></Vacancy>
      </List.Item>
    </List>
  );
}
