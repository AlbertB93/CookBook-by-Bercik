import { ButtonSimple } from "../../components/ButtonSimple/ButtonSimple";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import styles from "./SingleRecipe.module.css";

export function SingleRecipe() {
  const activeMeal = {
    id: 1,
    title: "Bajgiel z awokado, jajkiem i boczkiem",
    group: "breakfast",
    imageState: "../../../public/recipes/1_bajgiel-awokado-jajko-boczek.jpg",
    kcal: 470,
    fats: 23,
    carbons: 45,
    proteins: 19,
    groupOfCalories: "medium",
    servings: 1,
    essentialIngredients: [
      "bajgiel z makiem",
      "awokado",
      "jajko",
      "boczek parzony wędzony",
      "majonez vege",
      "sałata lodowa",
      "ogórek kiszony",
    ],
    weightEssentialIngredients: [
      "1 szt. (80g.)",
      "0.5 szt. (40g.)",
      "1 szt. (50g.)",
      "2 plastry (30g.)",
      "1 łyżka (20g.)",
      "1 liść (10 g.)",
      "0.5 szt. (40g.)",
    ],
    description:
      "Jajko smażymy na patelnii - robimy jajko sadzone. Boczek podsmażamy na osobnej patelni. Bajgla kroimy wdłuż. Smarujemy awokado, układamy kolejno: sałatę, jajko, majonez, ogórka oraz boczek. ",
  };

  return (
    <ContentWrapper>
      {" "}
      <div className={styles.singleRecipe}>
        <div className={styles.imgAndValues}>
          <div className={styles.imgContainerMeal}>
            <img
              src={activeMeal.imageState}
              alt="Zdjęcie"
              className={styles.logoImgMeal}
            />
          </div>
          <div className={styles.values}>
            Wartości odżywcze:
            <p className={styles.value}> {activeMeal.kcal} kcal</p>
            <p className={styles.value}>Tłuszcze: {activeMeal.fats} g.</p>
            <p className={styles.value}>Węglowodany: {activeMeal.carbons} g.</p>
            <p className={styles.value}>Białka: {activeMeal.proteins} g.</p>
          </div>
          <p>GRUPA POSIŁKU</p>
        </div>

        <div className={styles.content}>
          <div className={styles.titleMeal}>
            <p className={styles.title}> {activeMeal.title}</p>
            <ButtonSimple className={styles.btn}>Powrót</ButtonSimple>
          </div>
          <div className={styles.wrapper}>
            <ul className={styles.ingredients}>
              Składniki:
              {activeMeal.essentialIngredients.map((ingredient) => (
                <li key={Math.random()}> {ingredient}</li>
              ))}
            </ul>
            <div className={styles.howToCook}>
              <p>Przygotowanie:</p>
              {activeMeal.description}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
