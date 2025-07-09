import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Feed /> },
  { path: "/video/:id", element: <VideoDetail /> },
  { path: "/channel/:id", element: <ChannelDetail /> },
  { path: "/search/:searchTerm", element: <SearchFeed /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
