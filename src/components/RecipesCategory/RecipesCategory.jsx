import styles from "./RecipesCategory.module.css";

export function RecipesCategory() {
  return (
    <div className={styles.recipesCategory}>
      <span>Kategoria przepisu obiad itp.</span>
      <span>Kaloryczność</span>
      <span></span>
    </div>
  );
}
