import { Box, Typography, useTheme } from "@mui/material"
import "./services.css"
import { service_list } from "../../data"


export default function Services () {
    const theme = useTheme();
    return (
        <Box className="services">
            <Typography variant="h1">Services</Typography>
            <Box className="card_container">
                {
                    service_list.map((i, index) => {
                        return (
                            <Box key={index} >
                               <Box className="card_box">
                                <Box
                                component="img"
                                src={i.src}
                                sx={{
                                    width:"30vh"
                                }} />
                                <Typography sx={{color:theme.palette.secondary[100], fontSize:"20px", fontWeight:"bold"}}>{i.title}</Typography>
                                <Typography sx={{
                                    mt:"1rem",
                                    fontFamily:"sans-serif"
                                }}>{i.description}</Typography>
                               </Box>
                            </Box>
                        )
                    })
                }
            </Box>

        </Box>
    )
}