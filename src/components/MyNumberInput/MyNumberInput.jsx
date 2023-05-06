import { NumberInput } from "@mantine/core";
import React, { useContext } from "react";
import { FiltersContext, VacanciesContext } from "../../contexts/Contexts";
import classes from "./MyNumberInput.module.css";

export default function MyNumberInput({ placeholder, label, name, ...props }) {
  const [filters, setFilters] = useContext(FiltersContext);
  const [, , isVacanciesLoading] = useContext(VacanciesContext);
  return (
    <NumberInput
      {...props}
      disabled={isVacanciesLoading}
      min={1}
      value={Number(filters[name]) || ""}
      onChange={(value) => {
        const newFilters = { ...filters, [name]: value };
        if (value.length === 0) {
          delete newFilters["payment_from"];
        }
        setFilters({ ...newFilters });
      }}
      classNames={{
        label: classes["label"],
        input: classes["input"],
        control: classes["control"],
        rightSection: classes["rightSection"],
      }}
      placeholder={placeholder}
      label={label}
    />
  );
}
