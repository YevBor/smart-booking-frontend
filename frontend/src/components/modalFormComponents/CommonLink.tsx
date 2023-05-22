import { Typography, Link } from '@mui/material';

type Approps = {
  url: string;
  text: string;
};

const sxLinkTypography = {
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 1.25,
  mt: 1.5,
};

export default function CommonLink({ url, text }: Approps) {
  return (
    <Link underline="none" href={url}>
      <Typography variant="body2" sx={sxLinkTypography}>
        {text}
      </Typography>
    </Link>
  );
}
