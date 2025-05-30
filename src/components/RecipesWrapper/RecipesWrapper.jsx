import styles from "./RecipesWrapper.module.css";
import { RecipeAllRecipes } from "../RecipeAllRecipes/RecipeAllRecipes";

export function RecipesWrapper({ recipes, filter }) {
  /* użyć useEffect? */

  const filteredRecipes =
    filter === "all"
      ? recipes
      : recipes.filter(
          (recipe) => recipe.group === filter || recipe.groupB === filter
        );

  return (
    <div className={styles.recipesWrapper}>
      {filteredRecipes.map((dish) => (
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
