import React from "react";
import { Card, Group, Text, Title } from "@mantine/core";
import LocationIcon from "./UI/LocationIcon";
import StartIcon from "./UI/StarIcon";
import { Link } from "react-router-dom";

const VacancyCard = ({
  isVacancyPage,
  profession,
  town,
  typeOfWork,
  paymentFrom,
  paymentTo,
  currency,
}) => {
  return (
    <Card padding="25px">
      <Group noWrap position="apart" align="start">
        <Title
          size={isVacancyPage ? "2.8rem" : "2rem"}
          weight={isVacancyPage ? 700 : 600}
          color={isVacancyPage ? "#232134" : "#5E96FC"}
        >
          {profession}
        </Title>
        <StartIcon />
      </Group>
      <Group mt={12.5} mb={12.5}>
        <Text
          size={isVacancyPage ? "2rem" : "1.6rem"}
          weight={isVacancyPage ? 700 : 600}
        >
          з/п {paymentFrom !== 0 && `от ${paymentFrom}`}{" "}
          {paymentTo !== 0 && `до ${paymentTo} `}
          {paymentFrom !== 0 || paymentTo !== 0 ? currency : "не указана"}
        </Text>
        <Text>•</Text>
        <Text size={isVacancyPage ? "2rem" : "1.6rem"}>{typeOfWork}</Text>
      </Group>
      <Group>
        <LocationIcon />
        <Text size="1.6rem">{town}</Text>
      </Group>
    </Card>
  );
};

export default function Vacancy({
  isVacancyPage = false,
  id,
  profession,
  town,
  typeOfWork,
  paymentFrom,
  paymentTo,
  currency,
}) {
  {
    if (isVacancyPage)
      return (
        <VacancyCard
          isVacancyPage={isVacancyPage}
          profession={profession}
          town={town}
          typeOfWork={typeOfWork}
          paymentFrom={paymentFrom}
          paymentTo={paymentTo}
          currency={currency}
        />
      );
  }
  return (
    <Link style={{ textDecoration: "none" }} to={`/vacancy/${id}`}>
      <VacancyCard
        isVacancyPage={isVacancyPage}
        profession={profession}
        town={town}
        typeOfWork={typeOfWork}
        paymentFrom={paymentFrom}
        paymentTo={paymentTo}
        currency={currency}
      />
    </Link>
  );
}
