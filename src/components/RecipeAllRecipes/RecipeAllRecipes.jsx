import { Link } from "react-router-dom";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
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
    <Link className={styles.recipeAllRecipes}>
      <h3>{title}</h3>
      <img src={imgUrl} alt="FOTKA" className={styles.imgContainer} />
      <p>Wartości odżywcze:</p>
      <p className={styles.values}>
        {kcal} kcal. T: {fats}g. W: {carbons}g. B: {proteins} g.
      </p>
      <div className={styles.buttons}>
        <ButtonSmall>Pokaż przepis</ButtonSmall>
        <ButtonSmall>Dodaj</ButtonSmall>
      </div>
    </Link>
  );
}
