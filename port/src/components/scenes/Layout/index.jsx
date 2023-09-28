import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";
import { Height } from "@mui/icons-material";
import { useState } from "react";

export default function Layout() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar 
      isNonMobile={isNonMobile}
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      drawerWidth="250px"/>
      <Box flexGrow={1}>
        <Navbar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNonMobile/>
        <Outlet />
      </Box>
    </Box>
  );
}
