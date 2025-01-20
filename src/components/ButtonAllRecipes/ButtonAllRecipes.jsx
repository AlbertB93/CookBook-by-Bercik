import styles from "./ButtonAllRecipes.module.css";

export function ButtonAllRecipes({ children, onClick }) {
  return (
    <button className={styles.buttonAllRecipes} onClick={onClick}>
      {children}
    </button>
  );
}
