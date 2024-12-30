import styles from "./RecipesProducts.module.css";
import { ButtonSimple } from "../../components/ButtonSimple/ButtonSimple";
export function RecipesProducts() {
  return (
    <div className={styles.recipesProducts}>
      <span>Wybierz produkty, które masz w lodówce</span>
      <ButtonSimple>Filtruj</ButtonSimple>
    </div>
  );
}
