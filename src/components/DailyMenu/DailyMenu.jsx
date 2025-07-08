import styles from "./DailyMenu.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import { useContext } from "react";
import { SummaryOfDayStateContext } from "../../contexts/SummaryOfDayStateContext";
import { ListOfMealsStateContext } from "../../contexts/ListOfMealsStateContext";

export function DailyMenu() {
  const [listOfMeals, deleteFromMenu] = useContext(ListOfMealsStateContext);
  const [summaryOfDay] = useContext(SummaryOfDayStateContext);

  console.log("Daily Menu: " + listOfMeals);

  return (
    <div className={styles.dailyMenu}>
      <div className={styles.imgContainer}>
        <img src="/felek.png" alt="Zdjęcie" className={styles.logoImg} />
      </div>
      {listOfMeals.map(({ id, img, title, kcal, fats, carbons, proteins }) => (
        <div key={id} className={styles.singleMeal}>
          <div className={styles.imgContainerMeal}>
            <img src={img} alt="Zdjęcie" className={styles.logoImgMeal} />
          </div>
          <p className={styles.titleMeal}>
            {title}{" "}
            <ButtonSmall
              onClick={() => deleteFromMenu(id, kcal, fats, carbons, proteins)}
            >
              X{" "}
            </ButtonSmall>
          </p>

          <div className={styles.values}>
            <p className={styles.value}>kcal:{kcal}</p>
            <p className={styles.value}>T:{fats}g.</p>
            <p className={styles.value}>W:{carbons}g.</p>
            <p className={styles.value}>B:{proteins} g.</p>
          </div>
        </div>
      ))}{" "}
      <span className={styles.title}>Aktualny jadłospis</span>
      <span className={styles.title}>Podsumowanie:</span>
      <p>Wartość energetyncza: {summaryOfDay.kcal}</p>
      <p>Tłuszcze: {summaryOfDay.fats}g.</p>
      <p>Węglowodany: {summaryOfDay.carbons}g.</p>
      <p>Białka: {summaryOfDay.proteins}g.</p>
    </div>
  );
}
