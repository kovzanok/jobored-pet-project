import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Flex } from "@mantine/core";
import Filters from "../components/Filters/Filters";
import Vacancies from "../components/Vacancies";

import { VacancyService } from "../API/VacancyService";
import { VacanciesContext } from "../contexts/Contexts";
import { FiltersContext } from "../contexts/Contexts";
import { searchParamsToObject } from "../utils/utils";
import { useFetching } from "../hooks/useFetching";

export default function MainPage() {
  const [vacancies, setVacancies] = useState([]);
  const [isVacanciesLoading, setIsVacanciesLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(searchParamsToObject(searchParams));

  useFetching(
    (signal) => VacancyService.getAllVacancies(searchParams, signal),
    [searchParams],
    (data) => {
      setVacancies(data.objects);
      setIsVacanciesLoading(false);
    }
  );

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
        <Container size="1116px" px={0} py="40px">
          <Flex columnGap="28px">
            <Filters></Filters>
            <Vacancies></Vacancies>
          </Flex>
        </Container>
      </FiltersContext.Provider>
    </VacanciesContext.Provider>
  );
}
