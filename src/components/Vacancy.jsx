import React from "react";
import { Card, Group, Text, Title } from "@mantine/core";
import LocationIcon from "./UI/LocationIcon";
import StartIcon from "./UI/StartIcon";

export default function Vacancy({
  profession,
  town,
  typeOfWork,
  paymentFrom,
  paymentTo,
  currency,
}) {
  return (
    <Card padding="25px">
      <Group noWrap position="apart">
        <Title size="2rem" weight={600} color="#5E96FC">
          {profession}
        </Title>
        <StartIcon />
      </Group>
      <Group mt={12.5} mb={12.5}>
        <Text size="1.6rem" weight={600}>
          з/п {paymentFrom !== 0 && `от ${paymentFrom}`}{" "}
          {paymentTo !== 0 && `до ${paymentTo} `}
          {paymentFrom!==0 || paymentTo!==0 ? currency: 'не указана'}
        </Text>
        <Text>•</Text>
        <Text size="1.6rem">{typeOfWork}</Text>
      </Group>
      <Group>
        <LocationIcon />
        <Text size="1.6rem">{town}</Text>
      </Group>
    </Card>
  );
}
