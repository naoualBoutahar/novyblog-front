import { Typography, Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { display } from "@mui/system";
import IntroPicture from "../IntroPicture";

export default function Intro() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column-reverse", md: "row" }}
      justifyContent="space-around"
      alignItems="center"
      sx={{
        backgroundImage: ` 
                  linear-gradient(to right top, #b9b9b9, #cacaca, #dbdbdb, #ededed, #ffffff);`,
      }}
      spacing={4}
      pb={{ xs: "4rem", md: 0 }}
    >
      <Stack>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
          }}
        >
          Novyblog
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "white",
          }}
        >
          Be globally connected
        </Typography>
        <Link href="#articles">
          <Button
            variant="contained"
            color="secondary"
            sx={{ textDecoration: "none", mt: "3rem" }}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Get started
          </Button>
        </Link>
      </Stack>
      <IntroPicture />
    </Box>
  );
}
