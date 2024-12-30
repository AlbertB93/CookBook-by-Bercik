import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { RecipeMainPage } from "../../components/RecipeMainPage/RecipeMainPage";
import styles from "./MainPage.module.css";

export function MainPage() {
  return (
    <ContentWrapper>
      <div className={styles.mainPage}>
        <RecipeMainPage></RecipeMainPage>
        <RecipeMainPage></RecipeMainPage>
        <RecipeMainPage></RecipeMainPage>
      </div>
    </ContentWrapper>
  );
}
