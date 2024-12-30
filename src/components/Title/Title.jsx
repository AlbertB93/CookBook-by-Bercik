import styles from "./Title.module.css";
export function Title() {
  return (
    <div className={styles.title}>
      {" "}
      <span>Wybierz lub skomponuj własny posiłek </span>
      <span>Stwórz osobisty jadłospis</span>
    </div>
  );
}
