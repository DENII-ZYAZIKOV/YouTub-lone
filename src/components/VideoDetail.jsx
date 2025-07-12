import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoDetailsQuery } from "../services/youtubeApi";
import { Box, Typography } from "@mui/material";

function VideoDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetVideoDetailsQuery(id);

  if (isLoading) {
    return <Box sx={{ color: "white", p: 2 }}>Loading...</Box>;
  }
  if (error) {
    return <Box sx={{ color: "red", p: 2 }}>Ошибка загрузки видео</Box>;
  }

  const video = data?.items?.[0];
  const title = video?.snippet?.title;

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{ position: "relative", width: "100%", aspectRatio: "16/9", mb: 2 }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
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
      <Typography variant="h5" fontWeight="bold" sx={{ color: "white", mb: 2 }}>
        {title}
      </Typography>
    </Box>
  );
}

export default VideoDetail;
