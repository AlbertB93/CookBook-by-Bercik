import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";
import styles from "./AllRecipes.module.css";
import { FilterRecipes } from "../../components/FiltersRecipes/FiltersRecipes";
import { Form } from "../../components/Forms/Form";

export function AllRecipes() {
  const RECIPES = useLoaderData();

  const [filter, setFilter] = useState("all");
  return (
    <ContentWrapper>
      <div className={styles.allRecipes}>
        <FilterRecipes filter={filter} setFilter={setFilter}></FilterRecipes>
        <RecipesWrapper recipes={RECIPES} filter={filter}></RecipesWrapper>
      </div>
    </ContentWrapper>
  );
}
