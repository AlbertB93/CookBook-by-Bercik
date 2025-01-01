import styles from "./RecipesWrapper.module.css";
import { DBTESTDISHES } from "../../constants/dbtestdishes";
import { RecipeAllRecipes } from "../RecipeAllRecipes/RecipeAllRecipes";

export function RecipesWrapper() {
  /* użyć useEffect? */

  return (
    <div className={styles.recipesWrapper}>
      {DBTESTDISHES.map((dish) => (
        <RecipeAllRecipes
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
  );
}
