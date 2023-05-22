import {Typography} from "@mui/material"


type Approps = {
  text: string,
}

export default function Title({text}: Approps){
  return (
    <Typography component="h1" variant="h5" align="center">
      {text}
    </Typography>)
}