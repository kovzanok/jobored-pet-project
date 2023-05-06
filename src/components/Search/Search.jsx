import React, { useContext } from "react";
import { TextInput, Button } from "@mantine/core";
import classes from "./Search.module.css";
import { FiltersContext } from "../../contexts/Contexts";
import { VacanciesContext } from "../../contexts/Contexts";
import { useSearchParams } from "react-router-dom";
import searchIcon from "../../assets/search.svg";

export default function Search() {
  const [filters, setFilters] = useContext(FiltersContext);
  const [, , isVacanciesLoading, setIsVacanciesLoading] =
    useContext(VacanciesContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchVacancies = (e) => {
    e.preventDefault();
    if (new URLSearchParams(filters).toString() !== searchParams.toString()) {
      filters["page"] = 1;
      setIsVacanciesLoading(true);
      setSearchParams(new URLSearchParams(filters));
    }
  };

  const handleSearchInput = (e) => {
    const newFilters = { ...filters, keyword: e.target.value };
    if (e.target.value.length === 0) {
      delete newFilters["keyword"];
    }
    setFilters({ ...newFilters });
  };

  return (
    <form className={classes["form"]} onSubmit={searchVacancies}>
      <TextInput
        data-elem="search-input"
        disabled={isVacanciesLoading}
        value={filters["keyword"] || ""}
        onChange={handleSearchInput}
        classNames={{
          root: classes["root"],
          input: classes["search-input"],
          icon: classes["search-icon"],
          rightSection: classes["search-button"],
        }}
        placeholder="Введите название вакансии"
        rightSection={
          <Button
            data-elem="search-button"
            onClick={searchVacancies}
            disabled={isVacanciesLoading}
            style={{ borderRadius: "8px" }}
            size="lg"
          >
            Поиск
          </Button>
        }
        rightSectionWidth={160}
        icon={<img src={searchIcon} />}
      />
    </form>
  );
}
