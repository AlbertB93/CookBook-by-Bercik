import styles from "./MainMenu.module.css";
export function MainMenu() {
  return (
    <ul className={styles.mainMenu}>
      <li>Skomponuj swój posiłek</li>
      <li>Wyświetl przepisy</li>
    </ul>
  );
}
