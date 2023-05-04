import React from "react";
import { Container, List, Card } from "@mantine/core";
import Vacancy from "../components/Vacancy";
import VacancyPageBody from "../components/VacancyPageBody/VacancyPageBody";

export default function VacancyPage() {
  return (
    <Container size="773px" py="40px">
      <VacancyPageBody />
    </Container>
  );
}
