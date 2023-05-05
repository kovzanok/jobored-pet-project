import React from "react";
import { Burger, Container, Flex, createStyles } from "@mantine/core";
import Navigation from "./Navigation/Navigation";
import Logo from "./UI/Logo/Logo";
import NavigationWrapper from "./Navigation/NavigationWrapper";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: "1116px",
    padding: "24px 0",

    [theme.fn.smallerThan(1116)]: {
      padding: "24px",
    },
  },

  flex: {
    alignItems: "center",
    columnGap: "25%",
    [theme.fn.smallerThan(625)]: {
      columnGap: 0,
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  },

  burger: {
    display: "none",
    position: "relative",
    zIndex: 199,
    [theme.fn.smallerThan(530)]: {
      display: "inline",
    },
  },
}));

export default function MyHeader() {
  const { classes } = useStyles();
  const mathes = useMediaQuery("(max-width:530px)");
  const [opened, { toggle, close }] = useDisclosure();
  return (
    <header style={{ zIndex: 2 }}>
      <Container className={classes.container}>
        <Flex className={classes.flex}>
          <Logo></Logo>
          <NavigationWrapper matches={mathes} opened={opened} onClose={close}>
            <Navigation  onClose={close}></Navigation>
          </NavigationWrapper>
          <Burger
            opened={opened}
            onClick={toggle}
            size="3rem"
            className={classes.burger}
          />
        </Flex>
      </Container>
    </header>
  );
}
