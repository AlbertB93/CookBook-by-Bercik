import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { RecipeMainPage } from "../../components/RecipeMainPage/RecipeMainPage";
import { DBTESTDISHES } from "../../constants/dbtestdishes";
import styles from "./MainPage.module.css";

export function MainPage() {
  return (
    <ContentWrapper>
      <div className={styles.mainPage}>
        {DBTESTDISHES.map((dish) => (
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
