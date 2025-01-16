import { NavLink } from "react-router-dom";
import { FILTERCALORIES } from "../../constants/filterRecipes";
import styles from "./FilterByCalories.module.css";

export function FilterByCalories() {
  return (
    <div className={styles.filterByGroup}>
      <div className={styles.options}>
        {FILTERCALORIES.map((singleGroup) => {
          return (
            <div key={singleGroup.id} className={styles.singleOption}>
              <NavLink
                to={
                  singleGroup.name === "wszystkie"
                    ? `/przepisy`
                    : `/przepisy/kalorie/${singleGroup.path}`
                }
              >
                {singleGroup.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
