import { Button, NumberInput } from "@mantine/core";
import React, { useContext } from "react";
import classes from "./Filters.module.css";
import { FiltersContext } from "../../contexts/Contexts";
import { useSearchParams } from "react-router-dom";
import { VacanciesContext } from "../../contexts/Contexts";
import MySelect from "../MySelect/MySelect";

export default function Filters() {
  const [, , isVacanciesLoading, setIsVacanciesLoading] =
    useContext(VacanciesContext);
  const [filters, setFilters] = useContext(FiltersContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const submitFilters = () => {
    if (new URLSearchParams(filters).toString() !== searchParams.toString()) {
      setIsVacanciesLoading(true);
      setSearchParams(new URLSearchParams(filters));
    }
  };

  const resetFilters = () => {
    setFilters({ published: 1 });
    if (searchParams.toString().length !== 0) {
      setSearchParams(new URLSearchParams());
      setIsVacanciesLoading(true);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={classes["filters"]}>
      <div className={classes["header"]}>
        <h2 className={classes["title"]}>Фильтры</h2>
        <button
          disabled={isVacanciesLoading}
          onClick={resetFilters}
          className={classes["reset-button"]}
        >
          Сбросить все
          <span className={classes["cross-icon"]}></span>
        </button>
      </div>
      <div className={classes["filters__row"]}>
        <MySelect />
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
        onClick={submitFilters}
        classNames={{
          root: classes["submit-button"],
        }}
      >
        Применить
      </Button>
    </form>
  );
}
