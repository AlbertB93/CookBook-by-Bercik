import { ButtonSimple } from "../ButtonSimple/ButtonSimple";
import styles from "./RecipeAllRecipes.module.css";

export function RecipeAllRecipes({
  title,
  imgUrl,
  kcal,
  fats,
  carbons,
  proteins,
}) {
  return (
    <div className={styles.recipeAllRecipes}>
      <h3>{title}</h3>
      <img src={imgUrl} alt="FOTKA" className={styles.imgContainer} />
      <p>Wartości odżywcze:</p>
      <p className={styles.values}>
        {kcal} kcal. T: {fats}g. W: {carbons}g. B: {proteins} g.
      </p>
      <div className={styles.buttons}>
        <ButtonSimple>Pokaż przepis</ButtonSimple>
        <ButtonSimple>Dodaj</ButtonSimple>
      </div>
    </div>
  );
}
