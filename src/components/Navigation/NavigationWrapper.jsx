import { Drawer } from "@mantine/core";
import React from "react";

import classes from "./Navigation.module.css";

export default function NavigationWrapper({
  matches,
  children,
  opened,
  onClose,
}) {
  return matches ? (
    <Drawer
      zIndex={150}
      classNames={{
        body: classes["body"],
      }}
      size="140px"
      onClose={onClose}
      opened={opened}
      withCloseButton={false}
      position="top"
    >
      {children}
    </Drawer>
  ) : (
    <>{children}</>
  );
}
