import { Box, Typography } from "@mui/material";
import { GitHub, Language } from "@mui/icons-material";
import {Link} from "react-router-dom";
import { works } from "../../data";
import "./work.css";

export default function Works() {
  return (
   <Box>
    <Typography m="1rem" variant="h1">Recent Works</Typography>
     <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", 
    justifyContent:"center", padding:"10vh"}}>
      {works.map((i, index) => {
        return (
          <Box key={index}>
            <Box className="container">
             
              <Box className="card">
                <Box className="img-container">
                  <img src={i.card_img} alt="" />
                </Box>
                <Box className="card-details">
                  <h2>{i.card_title}</h2>
                  <p>
                    {i.card_desc}
                  </p>
                </Box>
                <Box className="github">
                  <Link to={i.github} target="_blank"><GitHub sx={{fontSize:"40px"}} /></Link>
                  <Link to={i.live} target="_blank"><Language sx={{fontSize:"40px"}} /></Link>
              </Box>

              </Box>
             
            </Box>
          </Box>
        );
      })}
    </Box>
   </Box>
  );
}
