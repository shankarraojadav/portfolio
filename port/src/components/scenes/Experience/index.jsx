import { Typography, Box, useTheme } from "@mui/material";
import "./experience.css";

const Experience = () => {
    const theme = useTheme();
  return (
    <Box className="experience" sx={{padding:"40px", color:theme.palette.secondary[100]}}>
        <Typography variant="h3">Experience</Typography>
   
    <Box className="timeline">
        
      <Box className="timeline__component">
        <Box className="timeline__date timeline__date--right">
          Jan 30, 2023
        </Box>
      </Box>
      <Box className="timeline__middle">
        <Box className="timeline__point"></Box>
      </Box>
      <Box className="timeline__component timeline__component--bg">
        <Typography className="timeline__title">Kigan Innovations</Typography>
        <Typography className="timeline__paragraph">
          Joined Kigan Innovations as a Full stack developer Inter
        </Typography>
      </Box>
      <Box className="timeline__component timeline__component--bg">
        <Typography className="timeline__title">Freelancing</Typography>
        <Typography className="timeline__paragraph">
          I started learning coding and, in just a few months, ventured into
          freelancing, applying my newfound programming skills.
        </Typography>
      </Box>
      <Box className="timeline__middle">
        <Box className="timeline__point"></Box>
      </Box>
      <Box className="timeline__component">
        <Box className="timeline__date">July 25, 2022</Box>
      </Box>
      <Box className="timeline__component">
        <Box className="timeline__date timeline__date--right">
          Febraury 3, 2021
        </Box>
      </Box>
      <Box className="timeline__middle">
        <Box className="timeline__point"></Box>
      </Box>
      <Box className="timeline__component timeline__component--bg">
        <Typography className="timeline__title">Started Business</Typography>
        <Typography className="timeline__paragraph">
          I started a business with my college mates, but we failed due to
          financial problems.
        </Typography>
      </Box>
      <Box className="timeline__component timeline__component--bottom timeline__component--bg">
        <Typography className="timeline__title">Graduated</Typography>
        <Typography className="timeline__paragraph">
          I graduated from JGI as a Mechanical Engineer
        </Typography>
      </Box>
      <Box className="timeline__middle">
        <Box className="timeline__point"></Box>
        <Box className="timeline__point timeline__point--bottom"></Box>
      </Box>
      <Box className="timeline__component timeline__component--bottom">
        <Box className="timeline__date">August 30, 2020</Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Experience;
