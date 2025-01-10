import { useLoaderData } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { RecipesProducts } from "../../components/RecipesProducts/RecipesProducts";
import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";
import styles from "./AllRecipes.module.css";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";

export function AllRecipes() {
  const RECIPES = useLoaderData();

  return (
    <ContentWrapper>
      <div className={styles.allRecipes}>
        <div className={styles.recipesFilter}>
          <ExpandableMenu></ExpandableMenu>
          <RecipesProducts></RecipesProducts>
        </div>
        <RecipesWrapper recipes={RECIPES}> </RecipesWrapper>
      </div>
    </ContentWrapper>
  );
}
