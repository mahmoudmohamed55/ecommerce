import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = (mode, direction) =>
  createTheme({
    direction,
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for dark mode
            myColor: {
              main: "#252b32",
            },

            bg: {
              main: "#F6F6F6",
            },

            neutral: {
              main: "#64748B",
            },

            favColor: {
              main: grey[800],
            },
          }
        : {
            // palette values for light mode

            myColor: {
              main: "#F6F9FC",
            },
            bg: {
              main: "#1D2021",
            },

            neutral: {
              main: "#64748B",
            },

            favColor: {
              main: grey[300],
            },
          }),
    },
  });
