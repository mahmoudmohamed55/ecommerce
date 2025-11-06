import { KeyboardArrowUp } from "@mui/icons-material";
import {  Fab, useScrollTrigger, Zoom } from "@mui/material";


export default function ScrollToTop() {
  const top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Zoom in={useScrollTrigger({ threshold: 80 })}>
      <Fab
        onClick={top}
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
