import styles from "./RecipesWrapper.module.css";
import { useGetData } from "./../../hooks/useGetData";

export function RecipesWrapper() {
  const {
    data: dishes,
    setData: setDishes,
    setError,
  } = useGetData("/db/dishes.json");

  /* użyć useEffect? */

  return (
    <div className={styles.recipesWrapper}>
      Recipes Wrapper
      {console.log("Obiekt:" + dishes[0])}
    </div>
  );
}
