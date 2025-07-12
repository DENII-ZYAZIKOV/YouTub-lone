import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Feed /> },
      { path: "/video/:id", element: <VideoDetail /> },
      { path: "/channel/:id", element: <ChannelDetail /> },
      { path: "/search/:searchTerm", element: <SearchFeed /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
