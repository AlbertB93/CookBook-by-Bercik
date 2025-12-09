import styles from "./RecipesWrapper.module.css";
import { RecipeAllRecipes } from "../RecipeAllRecipes/RecipeAllRecipes";

export function RecipesWrapper({
  recipes,
  filterGroup,
  filterCalories,
  inputValue,
}) {
  console.log("RecipesWrapper RECIPES: " + recipes[0].title);

  const filteredRecipes =
    filterGroup === "all"
      ? recipes
      : recipes.filter(
          (recipe) =>
            recipe.group === filterGroup || recipe.groupB === filterGroup
        );

  const filteredRecipesCalories =
    filterCalories === "all"
      ? filteredRecipes
      : filteredRecipes.filter((recipe) => recipe.kcal < filterCalories);

  return (
    <div className={styles.recipesWrapper}>
      {filteredRecipesCalories
        .filter((recipe) =>
          recipe.title.toUpperCase().includes(inputValue.toUpperCase())
        )
        .map((dish) => (
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
