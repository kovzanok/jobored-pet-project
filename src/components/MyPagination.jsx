import { Pagination } from "@mantine/core";
import React, { useContext } from "react";
import { VacanciesContext } from "../contexts/Contexts";

export default function MyPagination({ value, onChange }) {
  const [vacancies] = useContext(VacanciesContext);
  return (
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
      value={value}
      onChange={onChange}
      total={Math.min(Math.ceil(vacancies.length / 4), 3)}
    />
  );
}
