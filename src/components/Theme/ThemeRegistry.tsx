import { Container, CssBaseline, useMediaQuery } from "@mui/material";
import MuiButton from "@mui/material/Button";
import {
  createTheme,
  styled,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#7bc06f",
    },
    secondary: {
      main: "#1860a8",
    },
    error: {
      main: "#cd0000",
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "38px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "38px",
    },
    h3: {
      fontSize: "28px",
    },
    h4: {
      fontSize: "24px",
    },
    h5: {
      fontSize: "20px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s",
        },
        text: {
          textTransform: "unset",
          textDecoration: "underline",
          background: "none",
          fontSize: "16px",
          ":hover": {
            textDecoration: "underline",
            background: "none",
          },
        },
        contained: {
          textTransform: "unset",
          fontsize: "20px",
          color: "white",
          borderRadius: "32px",
          padding: "20px 20px",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          transition: "all 0.3s",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const theme = createTheme(themeOptions);

export const ResponsiveButton = styled(MuiButton)((props) => ({
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.body1,
    padding: "5px 10px",
    size: "small",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.body1,
    padding: "5px 10px",
    size: "small",
  },
}));

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container sx={{ padding: isMobile ? "16px" : "64px 128px" }}>
        {children}
      </Container>
    </ThemeProvider>
  );
}
