import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import CardDetail from "./routes/CardDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "cardDetail/:cardId",
    element: <CardDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
