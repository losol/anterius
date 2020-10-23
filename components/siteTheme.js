import { theme } from "@chakra-ui/core";

const SiteTheme = {
  ...theme,
  fonts: {
    heading: '"Source Sans Pro", sans-serif',
    body: '"Open Sans", "system-ui", "sans-serif"',
    mono: "monospace",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

export default SiteTheme;
