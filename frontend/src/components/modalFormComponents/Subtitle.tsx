import {Typography} from "@mui/material"

import theme from "../../styles/styles"


type Approps = {
  text: string,
}

export default function Subtitle({text}: Approps) {
  return (
    <Typography component="p" align="center" color={theme.palette.grey[600]} >
      {text} 
    </Typography>
  )
}
