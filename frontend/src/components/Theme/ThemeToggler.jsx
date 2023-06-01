import { FormLabel, Switch, useColorMode } from "@chakra-ui/react";

export const ThemeToggler = ({ showLabel = false, ...rest }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      {showLabel && (
        <FormLabel htmlFor="theme-toggler" fontSize={12} mt={2}>
          Enable Dark Theme
        </FormLabel>
      )}
      <Switch
        id="theme-toggler"
        size="sm"
        isChecked={colorMode === "dark"}
        isDisabled={false}
        value={colorMode}
        colorScheme="green"
        mr={2}
        onChange={toggleColorMode}
        {...rest}
      />
    </>
  );
};