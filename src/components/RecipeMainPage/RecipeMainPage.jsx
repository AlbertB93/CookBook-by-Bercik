import { ButtonSimple } from "../ButtonSimple/ButtonSimple";
import styles from "./RecipeMainPage.module.css";
import FELEK from "../../assets/felek.png";

export function RecipeMainPage() {
  return (
    <div className={styles.recipeMainPage}>
      <span>Tytuł potrawy</span>
      <img src={FELEK} alt="image of dishes" className={styles.image} />
      <span>Wartości odżywcze:</span>
      <div className={styles.values}>
        <p className={styles.value}> 100 kcal</p>
        <p className={styles.value}>T: 10 g.</p>
        <p className={styles.value}>W: 10 g.</p>
        <p className={styles.value}>B: 10 g.</p>
      </div>
      <div className={styles.buttons}>
        <ButtonSimple>Pokaż przepis</ButtonSimple>
        <ButtonSimple>Dodaj do jadłospisu</ButtonSimple>
      </div>
    </div>
  );
}
