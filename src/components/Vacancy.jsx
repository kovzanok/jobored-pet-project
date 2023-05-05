import React, { useContext } from "react";
import { Card, Group, Text, Title, createStyles } from "@mantine/core";
import locationIcon from "../assets/location.svg";
import StarIcon from "./UI/StarIcon";
import { Link } from "react-router-dom";
import { VacancyContext } from "../contexts/Contexts";

const useStyles = createStyles(() => ({
  title: {
    [`@media (max-width: 600px)`]: {
      fontSize: "2rem",
      lineHeight: "24px",
    },
  },
  salary: {
    [`@media (max-width: 600px)`]: {
      fontSize: "1.6rem",
    },
  },
  typeOfWork: {
    [`@media (max-width: 600px)`]: {
      fontSize: "1.6rem",
    },
  },
}));

const VacancyCard = ({ isVacancyPage }) => {
  const { profession, town, type_of_work, payment_from, payment_to, currency } =
    useContext(VacancyContext);
  const { classes } = useStyles();
  return (
    <Card padding="25px">
      <Group noWrap position="apart" align="start">
        <Title
          className={classes.title}
          ta="start"
          size={isVacancyPage ? "2.8rem" : "2rem"}
          weight={isVacancyPage ? 700 : 600}
          color={isVacancyPage ? "#232134" : "#5E96FC"}
          lh={isVacancyPage ? "33.89px" : "24.2px"}
        >
          {profession}
        </Title>
        <StarIcon />
      </Group>
      <Group mt={12.5} mb={12.5}>
        <Text
          className={classes.salary}
          size={isVacancyPage ? "2rem" : "1.6rem"}
          weight={isVacancyPage ? 700 : 600}
          lh="2rem"
        >
          з/п {payment_from !== 0 && `от ${payment_from}`}{" "}
          {payment_to !== 0 && `до ${payment_to} `}
          {payment_from !== 0 || payment_to !== 0 ? currency : "не указана"}
        </Text>
        <Text>•</Text>
        <Text
          className={classes.typeOfWork}
          size={isVacancyPage ? "2rem" : "1.6rem"}
        >
          {type_of_work.title}
        </Text>
      </Group>
      <Group>
        <img src={locationIcon} />
        <Text size="1.6rem">{town.title}</Text>
      </Group>
    </Card>
  );
};

const VacancyWrapper = ({ isVacancyPage, id, children }) => {
  return isVacancyPage ? (
    <>{children}</>
  ) : (
    <Link style={{ textDecoration: "none" }} to={`/vacancy/${id}`}>
      {children}
    </Link>
  );
};

export default function Vacancy({ isVacancyPage = false }) {
  const { id } = useContext(VacancyContext);

  return (
    <VacancyWrapper isVacancyPage={isVacancyPage} id={id}>
      <VacancyCard isVacancyPage={isVacancyPage} />
    </VacancyWrapper>
  );
}
