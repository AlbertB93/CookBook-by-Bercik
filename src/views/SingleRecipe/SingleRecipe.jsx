import { NavLink, useLoaderData } from "react-router-dom";
import { ButtonSimple } from "../../components/ButtonSimple/ButtonSimple";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import styles from "./SingleRecipe.module.css";

export function SingleRecipe() {
  const activeRecipe = useLoaderData();
  const activeMeal = activeRecipe[0];

  return (
    <ContentWrapper>
      <div className={styles.singleRecipe}>
        <ButtonSimple>
          <NavLink to={`/przepisy`}>Powrót</NavLink>
        </ButtonSimple>
        <div className={styles.photoIngredientsValuesWrapper}>
          <div className={styles.imgContainerMeal}>
            <p className={styles.title}> {activeMeal.title}</p>
            <img
              src={activeMeal.imageState}
              alt="Zdjęcie"
              className={styles.logoImgMeal}
            />
            <div className={styles.values}>
              <p className={styles.value}> {activeMeal.kcal} kcal </p>
              <p className={styles.value}>Tłuszcze: {activeMeal.fats} g.</p>
              <p className={styles.value}>
                Węglowodany: {activeMeal.carbons} g.
              </p>
              <p className={styles.value}>Białka: {activeMeal.proteins} g.</p>
            </div>
          </div>

          <ul className={styles.ingredients}>
            <p>Składniki:</p>
            {activeMeal.essentialIngredients.map((ingredient) => (
              <li key={Math.random()}> {ingredient}</li>
            ))}
          </ul>
        </div>
        <div className={styles.howToCook}>
          <p>Przygotowanie:</p>
          {activeMeal.description}
        </div>
      </div>
    </ContentWrapper>
  );
}
