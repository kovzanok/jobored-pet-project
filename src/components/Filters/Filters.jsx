import { Select, Button, NumberInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "./Filters.module.css";
import DownIcon from "../UI/DownIcon.jsx";
import styles from "./Select.css";
import { VacancyService } from "../../API/VacancyService";

export default function Filters() {
  const [catalogues, setCatalogues] = useState([]);

  useEffect(() => {
    VacancyService.getAllCatalogues().then((data) => setCatalogues(data));
  });
  console.log(catalogues);
  return (
    <form className={classes["filters"]}>
      <div className={classes["filters__header"]}>
        <h2 className={classes["filters__title"]}>Фильтры</h2>
        <button className={classes["filters__reset-button"]}>
          Сбросить все
          <span className={classes["filters__close-icon"]}></span>
        </button>
      </div>
      <div className={classes["filters__row"]}>
        <Select
          maxDropdownHeight='20rem'
          className={classes["filters__select"]}
          data={catalogues.map((catalogue) => catalogue.title)}
          radius="md"
          placeholder="Выберете отрасль"
          label="Отрасль"
          size="xl"
          rightSection={<DownIcon />}
          rightSectionWidth={50}
          styles={{ rightSection: { pointerEvents: "none" } }}
        />
      </div>
      <div className={classes["filters__row"]}>
        <NumberInput
          className={classes["filters__input"]}
          radius="md"
          placeholder="От"
          label="Оклад"
          size="xl"
        />
        <NumberInput
          className={classes["filters__input"]}
          radius="md"
          placeholder="До"
          size="xl"
        />
      </div>
      <Button bg="#5E96FC" className={classes["filters__button"]} size="xl">
        Применить
      </Button>
    </form>
  );
}
