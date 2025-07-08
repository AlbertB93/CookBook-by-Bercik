import { NavLink } from "react-router-dom";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
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

  /*   function addToDailyMenu(
    newId,
    newTitle,
    newImgUrl,
    newKcal,
    newFats,
    newCarbons,
    newProteins
  ) {
    setSummaryOfDay((prevState) => {
      prevState.kcal += newKcal;
      prevState.fats += newFats;
      prevState.carbons += newCarbons;
      prevState.proteins += newProteins;
      return { ...prevState };
    });

    setListOfMeals((prevState) => {
      return [
        ...prevState,
        {
          id: newId,
          title: newTitle,
          img: newImgUrl,
          kcal: newKcal,
          fats: newFats,
          carbons: newCarbons,
          proteins: newProteins,
        },
      ];
    });
  }
 */

  return (
    <ListOfMealsStateContext.Provider value={[listOfMeals, addToDailyMenu]}>
      <div className={styles.recipeAllRecipes}>
        <h3>{title}</h3>
        <img src={imgUrl} alt="FOTKA" className={styles.imgContainer} />
        <p>Wartości odżywcze:</p>
        <p className={styles.values}>
          {kcal} kcal. T: {fats}g. W: {carbons}g. B: {proteins} g.
        </p>
        <div className={styles.buttons}>
          <ButtonSmall>
            <NavLink to={`/przepis/${id}`}>Pokaż przepis</NavLink>
          </ButtonSmall>
          <ButtonSmall
            onClick={() =>
              addToDailyMenu(id, title, imgUrl, kcal, fats, carbons, proteins)
            }
          >
            Dodaj
          </ButtonSmall>
        </div>
      </div>
    </ListOfMealsStateContext.Provider>
  );
}
