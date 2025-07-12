import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "596f71005dmsh73fedcffdcef0d0p165237jsn7e37972660af"
      );
      headers.set("x-rapidapi-host", "youtube-v31.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (params = {}) => ({
        url: "search",
        params: {
          relatedToVideoId: "7ghhRHRP6t4",
          part: "id,snippet",
          type: "video",
          maxResults: "50",
          ...params,
        },
      }),
    }),
    getVideoDetails: builder.query({
      query: (videoId) => ({
        url: "videos",
        params: {
          part: "contentDetails,snippet,statistics",
          id: videoId,
        },
      }),
    }),

    searchVideos: builder.query({
      query: (searchTerm) => ({
        url: "search",
        params: {
          part: "snippet,id",
          q: searchTerm,
          type: "video",
          maxResults: "50",
        },
      }),
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoDetailsQuery,
  useSearchVideosQuery,
} = youtubeApi;
