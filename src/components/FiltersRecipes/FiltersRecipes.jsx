import { FilterByCalories } from "../FilterByCalories/FilterByCalories";
import { FilterByGroup } from "../FilterByGroup/FilterByGroup";
import styles from "./FiltersRecipes.module.css";

export function FilterRecipes() {
  return (
    <div className={styles.filterRecipes}>
      <div className={styles.singleFilter}>
        <h3> Grupa posiłku</h3>
        <FilterByGroup></FilterByGroup>
      </div>
      <div className={styles.singleFilter}>
        <h3>Kaloryczność</h3>
        <FilterByCalories></FilterByCalories>
      </div>
    </div>
  );
}
