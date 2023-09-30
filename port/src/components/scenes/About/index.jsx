import { Box, Button, Typography, useTheme } from "@mui/material";
import "../Home/background.css";
import "./about.css";
import FlexBetween from "../../FlexBetween";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {SelfImprovementOutlined, AutoGraphOutlined} from "@mui/icons-material"

export default function About() {
  const theme = useTheme();

  return (
    <Box className="about">
      <Box>
        <Typography variant="h1">About</Typography>
      </Box>

      <Box className="container">
        <Box>
          <img src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696067888/ocdnmfmapngsknxqlz2z.png" className="profile" />
        </Box>
        <Box className="right_box" >
          <Box sx={{ width: "100%", padding: "1rem" }}>
            <Typography fontSize={20}>
              I am Shankar Rao Jadav C, Full Stack Developer from Karnataka,
              India. I have few years of experience in Web site and App design,
              building, and customization, also I am good at Wordpress.
            </Typography>

            <Box>
              <Button
                sx={{
                  color: theme.palette.secondary[100],
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                <Link to="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696075326/m5mbmzshtmwpgdsecg28.pdf" download="SHANKAR_CV" target="_blank" style={{textDecoration:"none"}}>DOWNLOAD CV</Link>
              </Button>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ padding: "1rem" }}>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                DEVELOPMENT
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  background: "#fff",
                  borderRadius: "1rem",
                }}
              >
                <Box
                  sx={{
                    background: "green",
                    width: "90%",
                    height: "10px",
                    borderRadius: "1rem",
                  }}
                ></Box>
              </Box>
            </Box>

            <Box sx={{ padding: "1rem" }}>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                WEBSITE
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  background: "#fff",
                  borderRadius: "1rem",
                }}
              >
                <Box
                  sx={{
                    background: "#6C6CE5",
                    width: "85%",
                    height: "10px",
                    borderRadius: "1rem",
                  }}
                ></Box>
              </Box>
            </Box>

            <Box sx={{ padding: "1rem" }}>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                ANDROID & IOS
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  background: "#fff",
                  borderRadius: "1rem",
                }}
              >
                <Box
                  sx={{
                    background: "#FFD15C",
                    width: "80%",
                    height: "10px",
                    borderRadius: "1rem",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: "2rem", display: "flex", justifyContent:"center" }}>
        <Projects_Num />
      </Box>
    </Box>
  );
}

function Projects_Num() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (num < 20) {
        setNum(num + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [num]);
  return (
    <Box sx={{display:'flex', marginBottom:"2rem"}}>
      <Box sx={{padding:"2rem"}}>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <AutoGraphOutlined sx={{fontSize:"3rem"}} />
      <Typography  sx={{fontSize:"3rem"}}>{num}</Typography>
      </Box>
      <Typography  sx={{fontSize:"1rem"}}>Projects Completed</Typography>
      </Box>

      <Box sx={{padding:"2rem"}}>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <SelfImprovementOutlined sx={{fontSize:"3rem"}} />
      <Typography  sx={{fontSize:"3rem"}}>{num}</Typography>
      </Box>
      <Typography  sx={{fontSize:"1rem"}}>Satisfied Clients</Typography>
      </Box>
      
    </Box>
  );
}
