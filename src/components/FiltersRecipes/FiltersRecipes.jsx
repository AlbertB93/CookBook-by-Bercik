import styles from "./FiltersRecipes.module.css";

import { Select } from "../Select/Select";

export function FilterRecipes() {
  return (
    <div className={styles.filterRecipes}>
      <div className={styles.filterBox}>
        {" "}
        <p>Wybierz grupę składników:</p>
        <Select></Select>
      </div>
      <div className={styles.filterBox}>
        {" "}
        <p>Wybierz kaloryczność przepisu składników:</p>
        <Select></Select>
      </div>
    </div>
  );
}
