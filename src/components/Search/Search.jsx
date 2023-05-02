import React from "react";
import { TextInput, Button } from "@mantine/core";
import SearchIcon from "../UI/SearchIcon";
import classes from "./Search.module.css";

export default function Search() {
  return (
    <TextInput
      classNames={{
        input: classes["search-input"],
        icon: classes["search-icon"],
        rightSection: classes['search-button']
      }}
      placeholder="Введите название вакансии"
      rightSection={
        <Button style={{borderRadius: '8px'}} size="lg">
          Поиск
        </Button>
      }
      rightSectionWidth={160}
      icon={<SearchIcon />}
    />
  );
}
