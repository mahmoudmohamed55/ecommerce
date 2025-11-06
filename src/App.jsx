import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header2 from "./Components/Header/Header2";
import Footer from "./Components/Footer/Footer";
import Header1 from "./Components/Header/Header1";

function App() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
