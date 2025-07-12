import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useGetVideosQuery } from "../services/youtubeApi";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Videos = ({ videos, isLoading, error }) => {
  const {
    data: apiVideos,
    isLoading: apiLoading,
    error: apiError,
  } = useGetVideosQuery();

  const finalVideos = videos || apiVideos;
  const finalLoading = isLoading !== undefined ? isLoading : apiLoading;
  const finalError = error || apiError;

  if (finalLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          Loading videos...
        </Typography>
      </Box>
    );
  }

  if (finalError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Typography variant="h6" sx={{ color: "red" }}>
          Error loading videos: {finalError?.message || "Попробуйте включить vpn"}
        </Typography>
      </Box>
    );
  }

  if (!finalVideos?.items?.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          No videos found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      {finalVideos?.items?.map((video) => (
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
  );
};

export default Videos;
