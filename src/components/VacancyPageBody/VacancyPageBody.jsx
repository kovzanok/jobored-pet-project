import { Card, Loader } from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "./VacancyPageBody.module.css";
import { useParams } from "react-router-dom";
import { VacancyService } from "../../API/VacancyService";
import Vacancy from "../Vacancy";
import { VacancyContext } from "../../contexts/Contexts";

export default function VacancyPageBody() {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    VacancyService.getVacancyById(id).then((data) => {
      setVacancy(data);
    });
  }, []);
  return (
    <>
      {vacancy === null ? (
        <Loader mt="40px" w="100%" display="block" ta="center" size="100px" />
      ) : (
        <>
          <VacancyContext.Provider value={vacancy}>
            <Vacancy isVacancyPage={true} />
            <Card className={classes.card} p="24px" mt="20px">
              <div
                className={classes.info}
                dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
              ></div>
            </Card>
          </VacancyContext.Provider>
        </>
      )}
    </>
  );
}
