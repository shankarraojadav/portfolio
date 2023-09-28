import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { setMode } from "./state";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import FlexBetween from "./FlexBetween";

export default function Navbar({
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="space-between">
      <FlexBetween>
        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon />
        </IconButton>
      </FlexBetween>
      <FlexBetween gap="1.5rem">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
      </FlexBetween>
    </Box>
  );
}
