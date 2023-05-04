import { Select, Button, NumberInput, Loader } from "@mantine/core";
import React, { useContext, useEffect, useState, useMemo } from "react";
import classes from "./Filters.module.css";
import DownIcon from "../UI/DownIcon.jsx";
import styles from "./Select.css";
import { VacancyService } from "../../API/VacancyService";
import { FiltersContext } from "../../context/FiltersContext";
import { useSearchParams } from "react-router-dom";
import { VacanciesContext } from "../../context/VacancyContext";

export default function Filters() {
  const [catalogues, setCatalogues] = useState([]);

  const [vacancies, setVacancies, isVacanciesLoading, setIsVacanciesLoading] =
    useContext(VacanciesContext);
  const [filters, setFilters] = useContext(FiltersContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useMemo(() => {
    VacancyService.getAllCatalogues().then((data) => {
      setCatalogues(data);
    });
  }, []);
  return (
    <form onSubmit={(e) => e.preventDefault()} className={classes["filters"]}>
      <div className={classes["filters__header"]}>
        <h2 className={classes["filters__title"]}>Фильтры</h2>
        <button
          disabled={isVacanciesLoading}
          onClick={() => {
            setFilters({ published: 1 });
            if (searchParams.toString().length !== 0) {
              setSearchParams(new URLSearchParams());
              setIsVacanciesLoading(true);
            }
          }}
          className={classes["filters__reset-button"]}
        >
          Сбросить все
          <span className={classes["filters__close-icon"]}></span>
        </button>
      </div>
      <div className={classes["filters__row"]}>
        <Select
          value={Number(filters["catalogues"])}
          disabled={catalogues.length === 0 || isVacanciesLoading}
          onChange={(value) => {
            setFilters({ ...filters, catalogues: value });
          }}
          maxDropdownHeight="20rem"
          className={classes["filters__select"]}
          data={catalogues.map((catalogue) => {
            return { value: catalogue.key, label: catalogue.title };
          })}
          radius="md"
          placeholder="Выберете отрасль"
          label="Отрасль"
          size="xl"
          rightSection={
            catalogues.length === 0 || isVacanciesLoading ? (
              <Loader />
            ) : (
              <DownIcon />
            )
          }
          rightSectionWidth={50}
          styles={{ rightSection: { pointerEvents: "none" } }}
        />
      </div>
      <div className={classes["filters__row"]}>
        <NumberInput
        disabled={isVacanciesLoading}
          min={1}
          value={Number(filters["payment_from"]) || ""}
          onChange={(value) => {
            const newFilters = { ...filters, payment_from: value };
            if (value.length === 0) {
              delete newFilters["payment_from"];
            }
            setFilters({ ...newFilters });
          }}
          className={classes["filters__input"]}
          radius="md"
          placeholder="От"
          label="Оклад"
          size="xl"
        />
        <NumberInput
        disabled={isVacanciesLoading}
          min={1}
          value={Number(filters["payment_to"]) || ""}
          onChange={(value) => {
            const newFilters = { ...filters, payment_to: value };
            if (value.length === 0) {
              delete newFilters["payment_to"];
            }
            setFilters({ ...newFilters });
          }}
          className={classes["filters__input"]}
          radius="md"
          placeholder="До"
          size="xl"
        />
      </div>
      <Button
        disabled={isVacanciesLoading}
        onClick={() => {
          setIsVacanciesLoading(true);
          setSearchParams(new URLSearchParams(filters));
        }}
        bg="#5E96FC"
        className={classes["filters__button"]}
        size="xl"
      >
        Применить
      </Button>
    </form>
  );
}
