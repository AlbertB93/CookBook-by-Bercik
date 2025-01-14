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
      /*       {
        path: "/przepisy/:group",
        element: <AllRecipes />,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:3000/przepisy?group=${params.group}`);
        },
      }, */
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/przepis/:id",
        element: <SingleRecipe />,
        loader: ({ params }) => {
          console.log("Params w main loader przepis: " + params);
          return fetch(`http://localhost:3000/recipes?id=${params.id}`);
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
