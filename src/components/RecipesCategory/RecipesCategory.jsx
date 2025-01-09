import styles from "./RecipesCategory.module.css";
import { Select } from "../Select/Select";

export function RecipesCategory() {
  return (
    <div className={styles.recipesCategory}>
      <Select
      /* filter={filter} setFilter={setFilter} */
      >
        Wybierz grupę posiłków:
      </Select>
      <Select
      /* filter={filter} setFilter={setFilter} */
      >
        Kaloryczność:
      </Select>
      <span></span>
    </div>
  );
}
