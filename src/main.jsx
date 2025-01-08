import "./styles/theme.css";
import "./styles/globals.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllRecipes } from "./views/AllRecipes/AllRecipes.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { MainPage } from "./views/MainPage/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/przepisy",
        element: <AllRecipes />,
      },
      ,
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
