import "./styles/theme.css";
import "./styles/globals.css";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
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
      {
        path: "/przepisy/:group",
        element: <AllRecipes />,
        loader: ({ params }) => {
          const PATH_TO_ENDPOINT_MAPPING = {
            sniadanie: "breakfast",
            obiad: "dinner",
            kolacja: "supper",
            deser: "dessert",
          };

          const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.group];

          if (backEndPath) {
            return fetch(`http://localhost:3000/recipes?group=${backEndPath}`);
          } else {
            return redirect("/przepisy");
          }
        },
      },
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
