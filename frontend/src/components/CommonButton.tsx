import {
  Button,
} from "@mui/material"


  type Approps = {
    text: string,
  }
  
const sxSubmitButton = {
  mt: 3,
  mb: 2,
  letterSpacing: 1.25,
}

export default function CommonButton({text}: Approps){
  return(
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={sxSubmitButton}
    >
      {text}
    </Button>  
  )
}
