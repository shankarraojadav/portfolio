import { useEffect } from "react";
import "./Background.css";
import "./ConsoleText.css";
import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";



export default function Home() {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    const parallax = (event) => {
      const spans = document.querySelectorAll(".parallax-wrap span");

      spans.forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

 

  return (
    <Box className="home">
      <Box className="parallax-wrap">
        {isNonMobile && (
          <Box>
            <span value="-20">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1534/1534067.png"
                className="imgs"
              />
            </span>
            <span value="-10">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1067/1067357.png"
                className="imgs"
              />
            </span>
            <span value="-10">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3823/3823690.png"
                className="imgs"
              />
            </span>
            <span value="20">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3049/3049498.png"
                className="imgs"
              />
            </span>
            <span value="20">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2240/2240744.png"
                className="imgs"
              />
            </span>
            <span value="-20">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9672/9672521.png"
                className="imgs"
              />
            </span>
            <span value="20">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1970/1970285.png"
                className="imgs"
              />
            </span>
          </Box>
        )}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="../../../.././assets/profile.png" className="profile" />
          <p
            className="profile_text"
            style={{
              color: theme.palette.secondary[100],
            }}
          >
            SHANKAR RAO JADAV
          </p>
          <Box className="sub_title">
            <h1>I'm a Full Stack Developer</h1>
          </Box>
          <Link to="https://github.com/shankarraojadav" target="_blank">
            <GitHub
              sx={{ fontSize: "60px", color: theme.palette.secondary[200] }}
            />
          </Link>
        </Box>
      </Box>
      <Box display={isNonMobile ? "flex" : "block"}>
      <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              width: "100%",
              margin: "1rem",
              
            }}
          >
           <Link to="/contact" style={{textDecoration:"none"}}> Hire me</Link>
          </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            width: "100%",
            margin: "1rem",
          }}
        >
          <Link to="../../../../public/assets/SATHISH.PDF" download="SHANKAR_CV" target="_blank"  style={{textDecoration:"none"}}>DOWNLOAD CV</Link>
        </Button>
      </Box>
    </Box>
  );
}
