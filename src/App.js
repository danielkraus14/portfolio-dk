import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import Home from "./components/Home";
import Tecnologies from "./components/Tecnologies";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologies" element={<Tecnologies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
