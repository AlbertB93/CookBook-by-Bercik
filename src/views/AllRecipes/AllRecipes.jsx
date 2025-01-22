import { useLoaderData } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";
import styles from "./AllRecipes.module.css";
import { FilterRecipes } from "../../components/FiltersRecipes/FiltersRecipes";

export function AllRecipes() {
  const RECIPES = useLoaderData();

  return (
    <ContentWrapper>
      <div className={styles.allRecipes}>
        <FilterRecipes></FilterRecipes>
        <RecipesWrapper recipes={RECIPES}> </RecipesWrapper>
      </div>
    </ContentWrapper>
  );
}
