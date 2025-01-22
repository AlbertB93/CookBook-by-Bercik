import { NavLink, useLoaderData } from "react-router-dom";
import { ButtonSimple } from "../../components/ButtonSimple/ButtonSimple";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import styles from "./SingleRecipe.module.css";

export function SingleRecipe() {
  const activeRecipe = useLoaderData();
  const activeMeal = activeRecipe[0];

  const groupOfRecipe = {
    breakfast: "śniadanie",
    dinner: "obiad",
    dessert: "desery",
  };

  return (
    <ContentWrapper>
      <div className={styles.singleRecipe}>
        <div className={styles.topBar}>
          <p className={styles.title}> {activeMeal.title}</p>
          <ButtonSimple>
            <NavLink to={`/przepisy`}>Powrót</NavLink>
          </ButtonSimple>
        </div>
        <div className={styles.photoIngredientsValuesWrapper}>
          <div className={styles.imgContainerMeal}>
            <img
              src={activeMeal.imageState}
              alt="Zdjęcie"
              className={styles.logoImgMeal}
            />
          </div>
          <ul className={styles.ingredients}>
            Składniki:
            {activeMeal.essentialIngredients.map((ingredient) => (
              <li key={Math.random()}> {ingredient}</li>
            ))}
          </ul>
          <ul className={styles.ingredients}>
            Ilość:
            {activeMeal.weightEssentialIngredients.map((ingredient) => (
              <li key={Math.random()}> {ingredient}</li>
            ))}
          </ul>
          <div className={styles.values}>
            Wartości odżywcze:
            <p className={styles.value}> {activeMeal.kcal} kcal</p>
            <p className={styles.value}>Tłuszcze: {activeMeal.fats} g.</p>
            <p className={styles.value}>Węglowodany: {activeMeal.carbons} g.</p>
            <p className={styles.value}>Białka: {activeMeal.proteins} g.</p>
            Grupa posiłku:
            <p>{groupOfRecipe[activeMeal.group]}</p>
          </div>
        </div>
        <div className={styles.howToCook}>
          <p>Przygotowanie:</p>
          {activeMeal.description}
        </div>
      </div>
    </ContentWrapper>
  );
}
