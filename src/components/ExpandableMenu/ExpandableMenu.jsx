import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "./../../assets/arrow.png";
import { FILTERRECIPES } from "../../constants/categoriesRecipes";
import styles from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const params = useParams();
  console.log("Co mamy ? " + params);
  const activePath = "podzial-na-grupy";
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
                  {filter.groupOfRecipe.map((singleGroup) => {
                    return (
                      <li key={singleGroup.id}>
                        <NavLink
                          to={
                            singleGroup.name === "wszystkie"
                              ? `/przepisy`
                              : `/przepisy/${singleGroup.path}`
                          }
                        >
                          {singleGroup.name}
                        </NavLink>
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
