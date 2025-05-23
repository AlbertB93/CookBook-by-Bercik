import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";
import styles from "./AllRecipes.module.css";
import { FilterRecipes } from "../../components/FiltersRecipes/FiltersRecipes";
import { Form } from "../../components/Forms/Form";

export function AllRecipes() {
  const RECIPES = useLoaderData();
  const [inputValue, setInputValue] = useState("");
  return (
    <ContentWrapper>
      <div className={styles.allRecipes}>
        <Form inputValue={inputValue} setInputValue={setInputValue}>
          Wyszukaj potrawę:{" "}
        </Form>
        <FilterRecipes></FilterRecipes>
        <RecipesWrapper recipes={RECIPES}> </RecipesWrapper>
      </div>
    </ContentWrapper>
  );
}
