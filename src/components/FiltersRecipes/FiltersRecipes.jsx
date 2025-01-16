import { useState } from "react";
import { ButtonSimple } from "../ButtonSimple/ButtonSimple";
import { FilterByCalories } from "../FilterByCalories/FilterByCalories";
import { FilterByGroup } from "../FilterByGroup/FilterByGroup";
import { FilterProductsByGroup } from "../FilterProductsByGroup/FilterProductsByGroup";
import styles from "./FiltersRecipes.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";

export function FilterRecipes() {
  const [showFilterByGroup, setShowFilterByGroup] = useState(false);
  const [showFilterByCalories, setShowFilterByCalories] = useState(false);
  const [showFilterProductsByGroup, setShowFilterProductsByGroup] =
    useState(false);
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
      <ButtonSmall
        onClick={() => setShowFilterProductsByGroup((prevState) => !prevState)}
      >
        Wybierz grupę produktów
      </ButtonSmall>
      {showFilterProductsByGroup && (
        <FilterProductsByGroup></FilterProductsByGroup>
      )}
    </div>
  );
}
