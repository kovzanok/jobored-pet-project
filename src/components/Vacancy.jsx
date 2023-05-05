import React, { useContext } from "react";
import { Card, Group, Text, Title } from "@mantine/core";
import LocationIcon from "./UI/LocationIcon";
import StarIcon from "./UI/StarIcon";
import { Link } from "react-router-dom";
import { VacancyContext } from "../context/VacancyContext";

const VacancyCard = ({ isVacancyPage }) => {
  const {
    id,
    profession,
    town,
    type_of_work,
    payment_from,
    payment_to,
    currency,
  } = useContext(VacancyContext);
  return (
    <Card padding="25px">
      <Group noWrap position="apart" align="start">
        <Title
          ta="start"
          size={isVacancyPage ? "2.8rem" : "2rem"}
          weight={isVacancyPage ? 700 : 600}
          color={isVacancyPage ? "#232134" : "#5E96FC"}
        >
          {profession}
        </Title>
        <StarIcon id={id} />
      </Group>
      <Group mt={12.5} mb={12.5}>
        <Text
          size={isVacancyPage ? "2rem" : "1.6rem"}
          weight={isVacancyPage ? 700 : 600}
        >
          з/п {payment_from !== 0 && `от ${payment_from}`}{" "}
          {payment_to !== 0 && `до ${payment_to} `}
          {payment_from !== 0 || payment_to !== 0 ? currency : "не указана"}
        </Text>
        <Text>•</Text>
        <Text size={isVacancyPage ? "2rem" : "1.6rem"}>
          {type_of_work.title}
        </Text>
      </Group>
      <Group>
        <LocationIcon />
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
      <VacancyCard isVacancyPage={isVacancyPage}/>
    </VacancyWrapper>
  );
}
