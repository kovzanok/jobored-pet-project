import { Button, NumberInput } from "@mantine/core";
import React, { useContext } from "react";
import classes from "./Filters.module.css";
import { FiltersContext } from "../../contexts/Contexts";
import { useSearchParams } from "react-router-dom";
import { VacanciesContext } from "../../contexts/Contexts";
import MySelect from "../MySelect/MySelect";
import MyNumberInput from "../MyNumberInput/MyNumberInput";

export default function Filters({onClose}) {
  const [, , isVacanciesLoading, setIsVacanciesLoading] =
    useContext(VacanciesContext);
  const [filters, setFilters] = useContext(FiltersContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const submitFilters = () => {
    onClose();
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
      <div className={classes["row"]}>
        <MySelect />
      </div>
      <div className={classes["row"]}>
        <MyNumberInput placeholder="От" label="Оклад" name="payment_from" />
        <MyNumberInput placeholder="До" label="" name="payment_to" />
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
