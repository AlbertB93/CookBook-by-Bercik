import { NavLink } from "react-router-dom";
import { FILTERPRODUCTSBYGROUP } from "../../constants/filterRecipes";
import styles from "./FilterProductsByGroup.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";

export function FilterProductsByGroup({ setGroupOfProducts }) {
  return (
    <div className={styles.filterByGroup}>
      <div className={styles.options}>
        {FILTERPRODUCTSBYGROUP.map((singleGroup) => {
          return (
            <div key={singleGroup.id} className={styles.singleOption}>
              <ButtonSmall onClick={() => setGroupOfProducts(singleGroup.name)}>
                {singleGroup.name}
              </ButtonSmall>
            </div>
          );
        })}
      </div>
    </div>
  );
}
