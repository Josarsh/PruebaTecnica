'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Fondo oscuro
    primary: {
      main: "#ffffff", // Blanco para el texto principal
    },
    background: {
      default: "#1a2b44", // Fondo oscuro principal
      paper: "#2b3d58", // Fondo de la tarjeta
    },
    text: {
      primary: "#ffffff", // Texto principal blanco
      secondary: "#b0b8c1", // Texto secundario gris claro
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Fuente estándar
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#2b3d58", // Fondo de las tablas
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Color del texto en las celdas
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Línea divisoria de celdas
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.7)", // Checkbox en blanco/gris claro
          "&.Mui-checked": {
            color: "#ffffff", // Checkbox seleccionado en blanco
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#2b3d58", // Fondo de las tarjetas/paneles
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a2b44", // Fondo oscuro del encabezado
        },
      },
    },
  },
});

export default theme;