import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { RecipeMainPage } from "../../components/RecipeMainPage/RecipeMainPage";
import styles from "./MainPage.module.css";
import { useLoaderData } from "react-router-dom";

export function MainPage() {
  const recipes = useLoaderData();

  /*   setInterval(drawId, 1000); */

  let a = 2;
  let b = 4;
  let c = 6;

  function drawId() {
    a = Math.floor(Math.random() * 50 + 1);
    b = Math.floor(Math.random() * 50 + 1);
    c = Math.floor(Math.random() * 50 + 1);
    console.log("liczby w funkcji: " + a, b, c);
  }

  return (
    <ContentWrapper>
      <div className={styles.mainPage}>
        {recipes
          .filter(
            (recipe) => recipe.id == a || recipe.id == b || recipe.id == c
          )
          .map((dish) => (
            <RecipeMainPage
              key={dish.id}
              id={dish.id}
              title={dish.title}
              imgUrl={dish.imageState}
              kcal={dish.kcal}
              fats={dish.fats}
              carbons={dish.carbons}
              proteins={dish.proteins}
              ingredients={dish.ingredients}
              description={dish.description}
            />
          ))}
      </div>
    </ContentWrapper>
  );
}
