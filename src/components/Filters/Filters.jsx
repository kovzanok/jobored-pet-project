import { Select, Button, NumberInput } from "@mantine/core";
import React from "react";
import classes from "./Filters.module.css";
import DownIcon from "../UI/DownIcon.jsx";
import styles from './Select.css'

export default function Filters() {
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
          className={classes["filters__select"]}
          data={["IT, интернет, связь, телеком", "Кадры, управление персоналом", "Искусство, культура, развлечения", "Банки, инвестиции, лизинг"]}
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
