import { Box } from "@mui/material";

import Header3 from "../Components/Header/Header3";

import Hero from "../Components/Hero/Hero";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/Scroll/scrollToTop";

export default function Home() {
  return (
    <Box>
      <Header3 />
      <Hero />
      <Main />
      <ScrollToTop />
    </Box>
  );
}
