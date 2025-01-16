import { NavLink } from "react-router-dom";
import { FILTERGROUP } from "../../constants/filterRecipes";
import styles from "./FilterByGroup.module.css";

export function FilterByGroup() {
  return (
    <div className={styles.filterByGroup}>
      <div className={styles.options}>
        {FILTERGROUP.map((singleGroup) => {
          return (
            <div key={singleGroup.id} className={styles.singleOption}>
              <NavLink
                to={
                  singleGroup.name === "wszystkie"
                    ? `/przepisy`
                    : `/przepisy/${singleGroup.path}`
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
