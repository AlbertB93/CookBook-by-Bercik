import styles from "./DailyMenu.module.css";

export function DailyMenu() {
  return (
    <div className={styles.dailyMenu}>
      <div className={styles.imgContainer}>
        <img src="/felek.png" alt="Zdjęcie" className={styles.logoImg} />
      </div>

      <span className={styles.title}>Aktualny jadłospis</span>
      <span className={styles.title}>Podsumowanie:</span>
      <p>Wartość energetyncza: 100 kcal.</p>
      <p>Tłuszcze: 20g.</p>
      <p>Węglowodany: 30g.</p>
      <p>Białka: 40g.</p>
    </div>
  );
}
