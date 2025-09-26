import styles from "./newMealComposition.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import { useContext } from "react";
import { ListOfMealsStateContext } from "../../contexts/ListOfMealsStateContext";

export function NewMealComposition({
  listOfIngredients,
  setListOfIngredients,
  valuesOfMeal,
  eventHandlerDeleteIngredient,
  titleMyMeal,
  setTitleMyMeal,
}) {
  function deleteIngredient(id, kcal, fats, carbons, proteins) {
    eventHandlerDeleteIngredient(id, kcal, fats, carbons, proteins);
  }

  const [listOfMeals, addToDailyMenu] = useContext(ListOfMealsStateContext);

  function addMyMealToDailyMenu() {
    const imgUrl = "./felek.png";
    let idMyMeal = Math.random();
    addToDailyMenu(
      idMyMeal,
      titleMyMeal,
      imgUrl,
      valuesOfMeal.kcal,
      valuesOfMeal.fats,
      valuesOfMeal.carbons,
      valuesOfMeal.proteins
    );

    setListOfIngredients([]);
    setTitleMyMeal("");
    valuesOfMeal.kcal = 0;
    valuesOfMeal.fats = 0;
    valuesOfMeal.carbons = 0;
    valuesOfMeal.proteins = 0;
  }

  return (
    <ListOfMealsStateContext.Provider value={[listOfMeals, addToDailyMenu]}>
      <div className={styles.newMealComposition}>
        <p className={styles.titleNewMeal}>Twój stworzony posiłek:</p>
        {listOfIngredients.map(
          ({ id, img, title, weight, kcal, fats, carbons, proteins }) => (
            <div key={id} className={styles.singleIngredient}>
              <div className={styles.imgContainerMeal}>
                <img src={img} alt="Zdjęcie" className={styles.logoImgMeal} />
              </div>
              <p className={styles.titleMeal}>{title}</p>
              <ButtonSmall
                onClick={() =>
                  deleteIngredient(id, kcal, fats, carbons, proteins)
                }
              >
                X{" "}
              </ButtonSmall>
              <div className={styles.values}>
                <p className={styles.value}> Waga: {weight}g. </p>
                <p className={styles.value}>kcal:{kcal}</p>
                <p className={styles.value}>T:{fats}g.</p>
                <p className={styles.value}>W:{carbons}g.</p>
                <p className={styles.value}>B:{proteins}g.</p>
              </div>
            </div>
          )
        )}
        <h4 className={styles.titleNewMeal}>Podsumowanie:</h4>
        <p>Wartość energetyncza: {valuesOfMeal.kcal} kcal</p>
        <p>Tłuszcze: {valuesOfMeal.fats} g.</p>
        <p>Węglowodany: {valuesOfMeal.carbons} g.</p>
        <p>Białka: {valuesOfMeal.proteins} g.</p>
        <form action="" className={styles.form}>
          <label htmlFor="">Podaj nazwę</label>
          <input
            type="text"
            value={titleMyMeal}
            onChange={(e) => setTitleMyMeal(e.target.value)}
          />
        </form>
        <ButtonSmall
          onClick={() =>
            addMyMealToDailyMenu(
              titleMyMeal,
              valuesOfMeal.kcal,
              valuesOfMeal.fats,
              valuesOfMeal.carbons,
              valuesOfMeal.proteins
            )
          }
        >
          Dodaj posiłek do jadłospisu!
        </ButtonSmall>
      </div>
    </ListOfMealsStateContext.Provider>
  );
}
