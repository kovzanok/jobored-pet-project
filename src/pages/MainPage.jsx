import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Flex } from "@mantine/core";
import Filters from "../components/Filters/Filters";
import Vacansies from "../components/Vacancies/Vacansies";
import { Pagination } from "@mantine/core";
import { VacancyService } from "../API/VacancyService";
import { VacanciesContext } from "../context/VacancyContext";
import { FiltersContext } from "../context/FiltersContext";

function searchParamsToObject(searchParams) {
  const initialObject = { published: 1 };
  if (searchParams.toString().length !== 0) {
    for (const [key, value] of searchParams.entries()) {
      initialObject[key] = decodeURI(value);
    }
  }

  return initialObject;
}

export default function MainPage() {
  const [vacancies, setVacancies] = useState([]);
  const [isVacanciesLoading, setIsVacanciesLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(searchParamsToObject(searchParams));
  useEffect(() => {
    VacancyService.getAllVacancies(searchParams).then((data) => {
      setVacancies(data.objects);
      setIsVacanciesLoading(false);
    });
  }, [searchParams]);
  return (
    <VacanciesContext.Provider
      value={[
        vacancies,
        setVacancies,
        isVacanciesLoading,
        setIsVacanciesLoading,
      ]}
    >
      <FiltersContext.Provider value={[filters, setFilters]}>
        {" "}
        <Container size="1116px" px={0} py="40px">
          <Flex columnGap="28px">
            <Filters></Filters>
            <Vacansies></Vacansies>
          </Flex>
        </Container>
        <Pagination mb="44px" size="xl" position="center" total={3} />
      </FiltersContext.Provider>
    </VacanciesContext.Provider>
  );
}
