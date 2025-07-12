import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { SideBar, Videos } from "./index";
import { useLocation, useOutletContext } from "react-router-dom";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const location = useLocation();
  const { showRickroll, setShowRickroll } = useOutletContext();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowRickroll(false);
    }
  }, [location.pathname, setShowRickroll]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setShowRickroll={setShowRickroll}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        {showRickroll ? (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              mb: 2,
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Rick Astley - Never Gonna Give You Up"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                background: "#000",
                display: "block",
              }}
            />
          </Box>
        ) : (
          <Videos />
        )}
      </Box>
    </Stack>
  );
}

export default Feed;
