import React, { useContext, useEffect, useState } from "react";
import Vacancy from "../Vacancy";
import { List, Loader } from "@mantine/core";
import classes from "./VacanciesList.module.css";
import { VacanciesContext, VacancyContext } from "../../contexts/Contexts";
import MyPagination from "../MyPagination";
import { useSearchParams } from "react-router-dom";

export default function VacanciesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(
    Number(searchParams.get("page") || 1)
  );
  const [vacancies, , isVacanciesLoading, setIsVacanciesLoading] =
    useContext(VacanciesContext);
  const maxIndex = activePage % 5 === 0 ? 5 : activePage % 5;
  const displayedVacancies = vacancies.slice(maxIndex * 4 - 4, maxIndex * 4);

  useEffect(() => {
    if (displayedVacancies.length === 0) {
      setActivePage((a) => a - 1);
    }
  }, [displayedVacancies.length]);

  useEffect(
    () => setActivePage(Number(searchParams.get("page") || 1)),
    [searchParams]
  );

  return (
    <>
      <List
        classNames={{
          itemWrapper: classes["wrapper"],
        }}
        mt="16px"
        spacing="xl"
        w="100%"
        listStyleType="none"
      >
        {isVacanciesLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Loader size="10rem" />
          </div>
        ) : (
          <>
            {displayedVacancies.map((vacancy) => {
              return (
                <VacancyContext.Provider key={vacancy.id} value={vacancy}>
                  <List.Item>
                    <Vacancy></Vacancy>
                  </List.Item>
                </VacancyContext.Provider>
              );
            })}
            <MyPagination
              displayedVacancies={displayedVacancies}
              value={activePage}
              onChange={(value) => {
                setIsVacanciesLoading(true);
                const newSearchParams = new URLSearchParams(searchParams);
                newSearchParams.set("page", value);
                setSearchParams(newSearchParams);
              }}
            />
          </>
        )}
      </List>
    </>
  );
}
