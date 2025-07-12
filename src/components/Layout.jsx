import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import React, { useState } from "react";

const Layout = () => {
  const [showRickroll, setShowRickroll] = useState(false);
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar setShowRickroll={setShowRickroll} />
      <Outlet context={{ showRickroll, setShowRickroll }} />
    </Box>
  );
};
export default Layout;
