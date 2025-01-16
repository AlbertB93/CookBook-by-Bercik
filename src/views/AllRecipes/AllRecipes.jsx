import { useLoaderData } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { RecipesProducts } from "../../components/RecipesProducts/RecipesProducts";
import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";
import styles from "./AllRecipes.module.css";
import { FilterRecipes } from "../../components/FiltersRecipes/FiltersRecipes";

export function AllRecipes() {
  const RECIPES = useLoaderData();

  return (
    <ContentWrapper>
      <div className={styles.allRecipes}>
        <div className={styles.filterMenu}>
          <FilterRecipes></FilterRecipes>
          <RecipesProducts></RecipesProducts>
        </div>
        <RecipesWrapper recipes={RECIPES}> </RecipesWrapper>
      </div>
    </ContentWrapper>
  );
}
