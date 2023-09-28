import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMemo } from "react";
import Layout from "./components/scenes/Layout";
import Home from "./components/scenes/Home/Home";
import About from "./components/scenes/About";
import Services from "./components/scenes/Services";
import Experience from "./components/scenes/Experience";
import Works from "./components/scenes/Works";
import Contact from "./components/scenes/Contact";

export default function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
       </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
