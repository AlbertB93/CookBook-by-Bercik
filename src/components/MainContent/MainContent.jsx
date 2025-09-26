import { useState } from "react";
import styles from "./MainContent.module.css";
import { ListOfMealsStateContext } from "../../contexts/ListOfMealsStateContext.js";
import { SummaryOfDayStateContext } from "../../contexts/SummaryOfDayStateContext.js";

const initialSummaryOfDay = { kcal: 0, fats: 0, carbons: 0, proteins: 0 };

export function MainContent({ children }) {
  const [listOfMeals, setListOfMeals] = useState([]);
  const [summaryOfDay, setSummaryOfDay] = useState(initialSummaryOfDay);
  /* New Meal */
  const [valuesOfNewMeal, setValuesOfNewMeal] = useState({
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
  });

  function addToDailyMenu(id, title, imgUrl, kcal, fats, carbons, proteins) {
    setSummaryOfDay((prevState) => {
      prevState.kcal += kcal;
      prevState.fats += fats;
      prevState.carbons += carbons;
      prevState.proteins += proteins;
      return { ...prevState };
    });

    setListOfMeals((prevState) => {
      return [
        ...prevState,
        {
          id: id,
          title: title,
          img: imgUrl,
          kcal: kcal,
          fats: fats,
          carbons: carbons,
          proteins: proteins,
        },
      ];
    });
    setValuesOfNewMeal({ kcal: 0, fats: 0, carbons: 0, proteins: 0 });
  }

  function deleteFromMenu(id, kcal, fats, carbons, proteins) {
    console.log("deleteFrom: " + id);
    setListOfMeals((prevState) => prevState.filter((meal) => meal.id !== id));

    setSummaryOfDay((prevState) => {
      prevState.kcal -= kcal;
      prevState.fats -= fats;
      prevState.carbons -= carbons;
      prevState.proteins -= proteins;
      return { ...prevState };
    });
  }

  return (
    <ListOfMealsStateContext.Provider
      value={[listOfMeals, addToDailyMenu, deleteFromMenu]}
    >
      <SummaryOfDayStateContext.Provider
        value={[summaryOfDay, setSummaryOfDay]}
      >
        <div className={styles.mainContent}>{children}</div>;
      </SummaryOfDayStateContext.Provider>
    </ListOfMealsStateContext.Provider>
  );
}
