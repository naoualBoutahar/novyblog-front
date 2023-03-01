import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import Box from "@mui/material/Box";

export default function LayoutWithHeader({ children }) {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
}
