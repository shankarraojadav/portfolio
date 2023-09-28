import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  HomeOutlined,
  PersonOutlined,
  ElectricalServicesOutlined,
  TimelineOutlined,
  HubOutlined,
  ConnectWithoutContactOutlined,
  ChevronLeft,
  ChevronRightOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  {
    text: "Home",
    icon: <HomeOutlined />,
  },
  {
    text: "About",
    icon: <PersonOutlined />,
  },
  {
    text: "Services",
    icon: <ElectricalServicesOutlined />,
  },
  {
    text: "Experience",
    icon: <TimelineOutlined />,
  },
  {
    text: "Works",
    icon: <HubOutlined />,
  },
  {
    text: "Contact",
    icon: <ConnectWithoutContactOutlined />,
  },
];
export default function Sidebar({
  drawerWidth,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(!isSidebarOpen)}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.primary[200],
            },
          }}
          variant="persistent"
          anchor="left"
        >
          <Box width="100%">
            <Box m="1rem 2rem 1rem 3rem ">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    PORTFOLIO
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
          <List>
            {navItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "0.1rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }

              const lcText = text.toLocaleLowerCase();

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      backgroundColor:
                        active === lcText
                          ? theme.palette.secondary[300]
                          : "transparent",
                      color:
                        active === lcText
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[100],
                    }}
                  >
                    <ListItemIcon
                    sx={{
                        ml: "2rem",
                        color: active === lcText ?
                        theme.palette.primary[600]
                        : theme.palette.secondary[200]
                    }}>{icon}</ListItemIcon>
                    <ListItemText primary={text}>
                    {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </Box>
  );
}
