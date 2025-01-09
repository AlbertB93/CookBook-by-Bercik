import "./styles/theme.css";
import "./styles/globals.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllRecipes } from "./views/AllRecipes/AllRecipes.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { AllRecipesLoader } from "./api/AllRecipesLoader.js";
import { SingleRecipe } from "./views/SingleRecipe/SingleRecipe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/przepisy",
        element: <AllRecipes />,
        loader: AllRecipesLoader,
      },
      ,
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/przepis",
        element: <SingleRecipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
