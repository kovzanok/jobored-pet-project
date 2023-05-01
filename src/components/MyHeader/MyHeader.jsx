import React from "react";
import { Center, Container, Flex } from "@mantine/core";
import Navigation from "../Navigation/Navigation";
import Logo from "../UI/Logo/Logo";

export default function MyHeader() {
  return (
    <header>
      <Container size="1116px" px={0} py="24px">
        <Flex align="center" gap="280px">
          <Logo></Logo>
          <Navigation></Navigation>
        </Flex>
      </Container>
    </header>
  );
}
