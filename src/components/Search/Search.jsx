import React, { useContext } from "react";
import { TextInput, Button } from "@mantine/core";
import SearchIcon from "../UI/SearchIcon";
import classes from "./Search.module.css";
import { FiltersContext } from "../../contexts/Contexts";
import { VacanciesContext } from "../../contexts/Contexts";
import { VacancyService } from "../../API/VacancyService";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [filters, setFilters] = useContext(FiltersContext);
  const [vacancies, setVacancies, isVacanciesLoading, setIsVacanciesLoading] =
    useContext(VacanciesContext);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <TextInput
      disabled={isVacanciesLoading}
      value={filters["keyword"] || ""}
      onChange={(e) => {
        const newFilters = { ...filters, keyword: e.target.value };
        if (e.target.value.length === 0) {
          delete newFilters["keyword"];
        }
        setFilters({ ...newFilters });
      }}
      classNames={{
        root: classes["root"],
        input: classes["search-input"],
        icon: classes["search-icon"],
        rightSection: classes["search-button"],
      }}
      placeholder="Введите название вакансии"
      rightSection={
        <Button
          disabled={isVacanciesLoading}
          onClick={() => {
            
            if (
              new URLSearchParams(filters).toString() !==
              searchParams.toString()
            ) {
              setIsVacanciesLoading(true);
              const searchParams = new URLSearchParams(filters);
              setSearchParams(searchParams);
              VacancyService.getAllVacancies(searchParams).then((data) => {
                setVacancies(data.objects);
              });
            }
          }}
          style={{ borderRadius: "8px" }}
          size="lg"
        >
          Поиск
        </Button>
      }
      rightSectionWidth={160}
      icon={<SearchIcon />}
    />
  );
}
