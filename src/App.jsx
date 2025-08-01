import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Feed, VideoDetail, SearchFeed } from "./components";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Feed /> },
      { path: "/video/:id", element: <VideoDetail /> },

      { path: "/search/:searchTerm", element: <SearchFeed /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
