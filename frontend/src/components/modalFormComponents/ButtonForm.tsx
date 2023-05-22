import  Button  from "@mui/material/Button"


type Approps = {
  text: string,
}

const sxButton = {
  mt: 2,
  mb: 1,
}


export default function ButtonForm({text}: Approps) {
  return (
    <Button type="submit" fullWidth variant="contained" sx={sxButton}>
      {text}
    </Button>
  )
}