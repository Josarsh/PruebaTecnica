'use client'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import {Roboto} from 'next/font/google'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const base = createTheme({
  palette: {
    primary: {
      main: "#1a202c", // Color principal (ej. sidebar)
    },
    secondary: {
      main: "#2d3748", // Color secundario (hover en sidebar)
    },
    background: {
      default: "#f4f5f7", // Fondo principal del dashboard
      paper: "#fff", // Fondo de tarjetas
    },
    text: {
      primary: "#333", // Texto principal
      secondary: "#a0aec0", // Texto en enlaces del sidebar
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});
const theme= responsiveFontSizes(base)
export default theme 