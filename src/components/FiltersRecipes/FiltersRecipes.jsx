import { useState } from "react";
import { FilterByCalories } from "../FilterByCalories/FilterByCalories";
import { FilterByGroup } from "../FilterByGroup/FilterByGroup";
import styles from "./FiltersRecipes.module.css";
import { ButtonAllRecipes } from "../ButtonAllRecipes/buttonAllRecipes";

export function FilterRecipes() {
  const [showFilterByGroup, setShowFilterByGroup] = useState(false);
  const [showFilterByCalories, setShowFilterByCalories] = useState(false);

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
    </div>
  );
}
