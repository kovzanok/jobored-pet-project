import React from "react";
import { Card, Group, Text, Title } from "@mantine/core";
import LocationIcon from './UI/LocationIcon'
import StartIcon from './UI/StartIcon'

export default function Vacancy() {
  return (
    <Card padding='25px'>
      <Group position="apart">
        <Title size='2rem' weight={600} color="#5E96FC">Менеджер-дизайнер</Title>
        <StartIcon/>
      </Group>
      <Group mt={12.5} mb={12.5}>
        <Text size='1.6rem' weight={600}>з/п от 70000 rub</Text>
        <Text>•</Text>
        <Text size='1.6rem'>Полный рабочий день</Text>
      </Group>
      <Group>
        <LocationIcon/>
        <Text size='1.6rem'>Новый Уренгой</Text>
      </Group>
    </Card>
  );
}
