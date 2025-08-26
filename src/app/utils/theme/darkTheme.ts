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
