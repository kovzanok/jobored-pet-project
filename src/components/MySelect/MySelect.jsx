import { Loader, Select } from "@mantine/core";
import React, { useContext, useState } from "react";
import DownIcon from "../UI/DownIcon";
import {
  ActiveVacanciesContext,
  FiltersContext,
  VacanciesContext,
} from "../../contexts/Contexts";
import classes from "./MySelect.module.css";
import { VacancyService } from "../../API/VacancyService";
import { useFetching } from "../../hooks/useFetching";

export default function MySelect() {
  const [catalogues, setCatalogues] = useState([]);
  const [filters, setFilters] = useContext(FiltersContext);
  const [, , isVacanciesLoading] = useContext(VacanciesContext);
  const [, , token] = useContext(ActiveVacanciesContext);
  useFetching(
    (signal) => VacancyService.getAllCatalogues(signal, token),
    [token],
    (data) => setCatalogues(data)
  );

  return (
    <Select
      value={Number(filters["catalogues"])}
      disabled={catalogues.length === 0 || isVacanciesLoading}
      onChange={(value) => {
        setFilters({ ...filters, catalogues: value });
      }}
      maxDropdownHeight="18.8rem"
      classNames={{
        item: classes["item"],
        label: classes["label"],
        input: classes["input"],
        rightSection: classes["rightSection"],
        dropdown: classes["dropdown"],
        itemsWrapper: classes["itemsWrapper"],
      }}
      data={catalogues.map((catalogue) => {
        return { value: catalogue.key, label: catalogue.title };
      })}
      placeholder="Выберете отрасль"
      label="Отрасль"
      rightSection={
        catalogues.length === 0 || isVacanciesLoading ? (
          <Loader />
        ) : (
          <DownIcon />
        )
      }
      rightSectionWidth={60}
      styles={{ rightSection: { pointerEvents: "none" } }}
    />
  );
}
