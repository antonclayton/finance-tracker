"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      bg: string;
      text: string;
      primaryAccent: string;
      navbarBg: string;
      navbarBorder: string;
      navLink: string;
      mobileOverlayBg: string;
      hoverBg: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      bg?: string;
      text?: string;
      primaryAccent?: string;
      navbarBg?: string;
      navbarBorder?: string;
      navLink?: string;
      mobileOverlayBg?: string;
      hoverBg?: string;
    };
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    // Standard MUI palette mapping
    primary: {
      main: "#00b06b", // maps to your --primary-accent
    },
    secondary: {
      main: "#2d2d2d", // optional, maps to --navbar-bg
    },
    background: {
      default: "#1a1a1a", // maps to --bg-color
      paper: "#2d2d2d", // maps to --navbar-bg
    },
    text: {
      primary: "#f0f0f0", // maps to --text-color
    },

    // Custom colors for your specific needs
    custom: {
      bg: "#1a1a1a",
      text: "#f0f0f0",
      primaryAccent: "#00b06b",
      navbarBg: "#2d2d2d",
      navbarBorder: "#444",
      navLink: "#ccc",
      mobileOverlayBg: "#252525",
      hoverBg: "#383838",
    },
  },
});
