import { ButtonSimple } from "../ButtonSimple/ButtonSimple";
import styles from "./RecipeMainPage.module.css";
import FELEK from "../../assets/felek.png";


export function RecipeMainPage({
  id,
  title,
  imgUrl,
  kcal,
  fats,
  carbons,
  proteins,
  ingredients,
  description,
}) {
  return (
    <div className={styles.recipeMainPage}>
      <span className={styles.title}>{title}</span>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} alt="image of dishes" className={styles.image} />
      </div>
      <div className={styles.valuesWrapper}>
        <div>Wartości odżywcze:</div>
        <div className={styles.values}>
          <p className={styles.value}> 100 kcal</p>
          <p className={styles.value}>T: 10 g.</p>
          <p className={styles.value}>W: 10 g.</p>
          <p className={styles.value}>B: 10 g.</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <ButtonSimple>Pokaż przepis</ButtonSimple>
        <ButtonSimple>Dodaj do jadłospisu</ButtonSimple>
      </div>
    </div>
  );
}
