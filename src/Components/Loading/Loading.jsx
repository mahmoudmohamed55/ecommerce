import { Box, Typography, useTheme } from "@mui/material";
import "./loading.css";
export default function Loading() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component={"span"}
        className="loader"
        sx={{
          "--loader-color":
            theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
        }}
      ></Typography>
    </Box>
  );
}
