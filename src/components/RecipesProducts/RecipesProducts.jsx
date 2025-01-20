import styles from "./RecipesProducts.module.css";
import { Form } from "../../components/Forms/Form";

import { useState } from "react";

import { FilterProductsByGroup } from "../FilterProductsByGroup/FilterProductsByGroup";
import { RecipesProductsList } from "../RecipesProductsList/RecipesProductsList";
import { ButtonAllRecipes } from "../ButtonAllRecipes/buttonAllRecipes";

export function RecipesProducts() {
  const [showFilterProductsByGroup, setShowFilterProductsByGroup] =
    useState(false);

  const [groupOfProducts, setGroupOfProducts] = useState("wszystkie");

  return (
    <div className={styles.recipesProducts}>
      <ButtonAllRecipes
        onClick={() => setShowFilterProductsByGroup((prevState) => !prevState)}
      >
        Wybierz grupę produktów
      </ButtonAllRecipes>
      {showFilterProductsByGroup && (
        <FilterProductsByGroup
          setGroupOfProducts={setGroupOfProducts}
        ></FilterProductsByGroup>
      )}
      <div className={styles.selectBox}>
        <Form /* inputValue={inputValue} setInputValue={setInputValue} */>
          Wyszukaj składnik:{" "}
        </Form>
      </div>
      <RecipesProductsList
        groupOfProducts={groupOfProducts}
      ></RecipesProductsList>
    </div>
  );
}
