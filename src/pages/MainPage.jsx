import React, { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Container, Flex, createStyles } from "@mantine/core";
import Filters from "../components/Filters/Filters";
import Vacancies from "../components/Vacancies";
import { VacancyService } from "../API/VacancyService";
import { ActiveVacanciesContext, VacanciesContext } from "../contexts/Contexts";
import { FiltersContext } from "../contexts/Contexts";
import { searchParamsToObject } from "../utils/utils";
import { useFetching } from "../hooks/useFetching";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { FiltersWrapper } from "../components/FiltersWrapper/FiltersWrapper";

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: "1116px",
    padding: "40px 0",

    [theme.fn.smallerThan(1116)]: {
      padding: "40px 24px",
    },
  },
  buttonWrapper: {
    width: "100%",
    height: "7vh",
    display: "none",
    position: "fixed",
    zIndex: 10,
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
    [theme.fn.smallerThan(930)]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
    },
  },
  button: {
    fontSize: "2rem",
    width: "130px",
    height: "40px",
    borderRadius: "8px",
  },
}));

export default function MainPage() {
  const [vacancies, setVacancies] = useState([]);
  const [isVacanciesLoading, setIsVacanciesLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(searchParamsToObject(searchParams));
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 930px)");
  const [, , token] = useContext(ActiveVacanciesContext);
  const [opened, { open, close }] = useDisclosure(false);


    useFetching(
      (signal) => VacancyService.getAllVacancies(searchParams, signal, token),
      [searchParams,token],
      (data) => {
        setVacancies(data.objects);
        setIsVacanciesLoading(false);
      }
    );


  return (
    <VacanciesContext.Provider
      value={[
        vacancies,
        setVacancies,
        isVacanciesLoading,
        setIsVacanciesLoading,
      ]}
    >
      <FiltersContext.Provider value={[filters, setFilters]}>
        <Container className={classes.container}>
          <Flex columnGap="28px">
            <FiltersWrapper mathes={matches} opened={opened} onClose={close}>
              <Filters onClose={close}></Filters>
            </FiltersWrapper>

            <Vacancies></Vacancies>
            <div className={classes.buttonWrapper}>
              <Button onClick={open} className={classes.button}>
                Фильтры
              </Button>
            </div>
          </Flex>
        </Container>
      </FiltersContext.Provider>
    </VacanciesContext.Provider>
  );
}
