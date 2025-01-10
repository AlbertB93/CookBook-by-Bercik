import { NavLink } from "react-router-dom";
import ARROW_ICON from "./../../assets/arrow.png";
import { FILTERRECIPES } from "../../constants/categoriesRecipes";
import styles from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const activePath = "podzial-na-kalorie";
  return (
    <div className={styles.expandableMenu}>
      <ul>
        {FILTERRECIPES.map((filter) => {
          return (
            <li key={filter.path}>
              <NavLink to={filter.path}>
                {filter.filterName}
                <img
                  src={ARROW_ICON}
                  alt="ikonka strzałki"
                  className={styles.arrowIcon}
                />
              </NavLink>
              {activePath === filter.path && (
                <ul>
                  {filter.groupOfRecipe.map((test) => {
                    return (
                      <li key={test.id}>
                        <NavLink to={test.path}>{test.name}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// obracanie strzałki
/*
className={
  activePath === category.path
      ? styles.expanded
      : ""
}
      */
