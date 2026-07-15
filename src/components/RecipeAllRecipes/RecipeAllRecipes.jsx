import { NavLink } from "react-router-dom";
import styles from "./RecipeAllRecipes.module.css";
import { ListOfMealsStateContext } from "../../contexts/ListOfMealsStateContext.js";
import { useContext } from "react";

export function RecipeAllRecipes({
  id,
  title,
  imgUrl,
  kcal,
  fats,
  carbons,
  proteins,
}) {
  const [listOfMeals, addToDailyMenu] = useContext(ListOfMealsStateContext);

  return (
    <ListOfMealsStateContext.Provider value={[listOfMeals, addToDailyMenu]}>
      <NavLink to={`/przepis/${id}`}>
        <div className={styles.recipeAllRecipes}>
          <h3>{title}</h3>
          <img src={imgUrl} alt="FOTKA" className={styles.imgContainer} />
          <p className={styles.values}>
            {kcal} kcal. T: {fats}g. W: {carbons}g. B: {proteins} g.
          </p>
        </div>
      </NavLink>
    </ListOfMealsStateContext.Provider>
  );
}
