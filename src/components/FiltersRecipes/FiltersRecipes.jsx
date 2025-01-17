import { useState } from "react";
import { FilterByCalories } from "../FilterByCalories/FilterByCalories";
import { FilterByGroup } from "../FilterByGroup/FilterByGroup";
import styles from "./FiltersRecipes.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";

export function FilterRecipes() {
  const [showFilterByGroup, setShowFilterByGroup] = useState(false);
  const [showFilterByCalories, setShowFilterByCalories] = useState(false);

  return (
    <div className={styles.filterRecipes}>
      <ButtonSmall
        onClick={() => setShowFilterByGroup((prevState) => !prevState)}
      >
        Wybierz grupę posiłku
      </ButtonSmall>

      {showFilterByGroup && <FilterByGroup></FilterByGroup>}

      <ButtonSmall
        onClick={() => setShowFilterByCalories((prevState) => !prevState)}
      >
        Wybierz kaloryczność posiłku
      </ButtonSmall>
      {showFilterByCalories && <FilterByCalories></FilterByCalories>}
    </div>
  );
}
