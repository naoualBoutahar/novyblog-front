import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      marginTop={4}
      sx={{ backgroundColor: "primary.main" }}
      padding={4}
    >
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="email">
          <EmailIcon />
        </IconButton>
      </Stack>
      <Typography>Copyright @Novelis{new Date().getFullYear()}</Typography>
    </Stack>
  );
}
