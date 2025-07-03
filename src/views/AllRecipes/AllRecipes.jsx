import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";
import styles from "./AllRecipes.module.css";
import { FilterRecipes } from "../../components/FiltersRecipes/FiltersRecipes";

export function AllRecipes() {
  const RECIPES = useLoaderData();

  const [filterGroup, setFilterGroup] = useState("all");
  const [filterCalories, setFilterCalories] = useState("all");
  const [inputValue, setInputValue] = useState("");

  return (
    <ContentWrapper>
      <div className={styles.allRecipes}>
        <FilterRecipes
          filterGroup={filterGroup}
          setFilterGroup={setFilterGroup}
          filterCalories={filterCalories}
          setFilterCalories={setFilterCalories}
          inputValue={inputValue}
          setInputValue={setInputValue}
        ></FilterRecipes>
        <RecipesWrapper
          recipes={RECIPES}
          filterGroup={filterGroup}
          filterCalories={filterCalories}
          inputValue={inputValue}
        ></RecipesWrapper>
      </div>
    </ContentWrapper>
  );
}
