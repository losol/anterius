import { Button, Icon, useColorMode } from "@chakra-ui/core";

export default (ToggleLight) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <Icon name="moon" size="24px" />
      ) : (
        <Icon name="sun" size="24px" />
      )}
    </Button>
  );
};
