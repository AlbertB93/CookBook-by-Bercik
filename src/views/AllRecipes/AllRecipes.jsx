import { useLoaderData } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { RecipesCategory } from "../../components/RecipesCategory/RecipesCategory";
import { RecipesProducts } from "../../components/RecipesProducts/RecipesProducts";
import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";
import styles from "./AllRecipes.module.css";

export function AllRecipes() {
  const RECIPES = useLoaderData();

  console.log(RECIPES);

  return (
    <ContentWrapper>
      <div className={styles.allRecipes}>
        <RecipesProducts></RecipesProducts>
        <div>
          <RecipesCategory></RecipesCategory>
          <RecipesWrapper recipes={RECIPES}> </RecipesWrapper>
        </div>
      </div>
    </ContentWrapper>
  );
}
