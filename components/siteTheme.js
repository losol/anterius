import { theme } from "@chakra-ui/core";

const customIcons = {
  hamburger: {
    path: (
      <path
        fill="currentColor"
        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
        viewBox="0 0 20 20"
      />
    ),
  },
};

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
  light: {
    color: theme.colors.gray[700],
    bg: theme.colors.red[500],
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[500]
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400]
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "5rem",
    "5xl": "6rem",
    "6xl": "8rem",
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

export default SiteTheme;
