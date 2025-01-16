import { NavLink } from "react-router-dom";
import { FILTERPRODUCTSBYGROUP } from "../../constants/filterRecipes";
import styles from "./FilterProductsByGroup.module.css";

export function FilterProductsByGroup() {
  return (
    <div className={styles.filterByGroup}>
      <div className={styles.options}>
        {FILTERPRODUCTSBYGROUP.map((singleGroup) => {
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
