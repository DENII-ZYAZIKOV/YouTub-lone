import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import { useSearchVideosQuery } from "../services/youtubeApi";
import { useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { SideBar } from "./index";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const {
    data: searchResults,
    isLoading,
    error,
  } = useSearchVideosQuery(searchTerm);

  if (isLoading) {
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
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Searching for "{searchTerm}"...
          </Typography>
        </Box>
      </Stack>
    );
  }

  if (error) {
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
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h6" sx={{ color: "red" }}>
            Error searching for "{searchTerm}"
          </Typography>
        </Box>
      </Stack>
    );
  }

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
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for:{" "}
          <span style={{ color: "#F31503" }}>{searchTerm}</span>
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {searchResults?.items?.map((video) => (
            <Card
              key={video.id.videoId}
              sx={{ bgcolor: "#1e1e1e", color: "white", cursor: "pointer" }}
            >
              <Link
                to={`/video/${video.id.videoId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={video.snippet?.thumbnails?.high?.url}
                  alt={video.snippet?.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
                    {video.snippet?.title?.length > 60
                      ? `${video.snippet.title.substring(0, 60)}...`
                      : video.snippet?.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                    {video.snippet?.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {video.snippet?.publishedAt &&
                      new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchFeed;
