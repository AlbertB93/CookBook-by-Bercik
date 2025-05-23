import { useState } from "react";
import { FilterByCalories } from "../FilterByCalories/FilterByCalories";
import { FilterByGroup } from "../FilterByGroup/FilterByGroup";
import styles from "./FiltersRecipes.module.css";
import { ButtonAllRecipes } from "../ButtonAllRecipes/buttonAllRecipes";
import { FilterProductsByGroup } from "../FilterProductsByGroup/FilterProductsByGroup";
import { RecipesProducts } from "../RecipesProducts/RecipesProducts";

export function FilterRecipes() {
  const [groupOfProducts, setGroupOfProducts] = useState("wszystkie");
  const [showFilterByGroup, setShowFilterByGroup] = useState(false);
  const [showFilterByCalories, setShowFilterByCalories] = useState(false);
  const [showFilterProductsByGroup, setShowFilterProductsByGroup] =
    useState(false);

  return (
    <div className={styles.filterRecipes}>
      <ButtonAllRecipes
        onClick={() => setShowFilterByGroup((prevState) => !prevState)}
      >
        Wybierz grupę posiłku
      </ButtonAllRecipes>

      {showFilterByGroup && <FilterByGroup></FilterByGroup>}

      <ButtonAllRecipes
        onClick={() => setShowFilterByCalories((prevState) => !prevState)}
      >
        Wybierz kaloryczność posiłku
      </ButtonAllRecipes>
      {showFilterByCalories && <FilterByCalories></FilterByCalories>}

      <ButtonAllRecipes
        onClick={() => setShowFilterProductsByGroup((prevState) => !prevState)}
      >
        Wybierz grupę produktów
      </ButtonAllRecipes>
      {showFilterProductsByGroup && (
        <>
          {" "}
          <FilterProductsByGroup
            setGroupOfProducts={setGroupOfProducts}
          ></FilterProductsByGroup>
          <RecipesProducts groupOfProducts={groupOfProducts}></RecipesProducts>
        </>
      )}
    </div>
  );
}
