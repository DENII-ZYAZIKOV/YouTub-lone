import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SideBar } from "./index";

function Feed() {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar />

      </Box>
    </Stack>
  );
}

export default Feed;
