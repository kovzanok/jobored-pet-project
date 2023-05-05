import { Modal } from "@mantine/core";
import classes from "./FiltersWrapper.module.css";

export const FiltersWrapper = ({ mathes, children,opened, onClose }) => {
  return mathes ? (
    <Modal
      radius="8px"
      classNames={{
        body: classes["body"],
        content: classes["content"],
      }}
      opened={opened}
      keepMounted
      withCloseButton={false}
      yOffset="20vh"
      xOffset={0}
      size="auto"
      onClose={onClose}
    >
      {children}
    </Modal>
  ) : (
    <>{children}</>
  );
};
