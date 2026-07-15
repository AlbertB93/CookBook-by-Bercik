import styles from "./FiltersRecipes.module.css";
import { Form } from "../Forms/Form";
import { NavLink } from "react-router-dom";

export function FilterRecipes({
  filterGroup,
  setFilterGroup,
  filterCalories,
  setFilterCalories,
  inputValue,
  setInputValue,
}) {
  return (
    <div className={styles.filterRecipes}>
      <div className={styles.recipeCategories}>
        <NavLink to={"/przepisy/sniadanie"} className={styles.category}>
          {"śniadania"}
        </NavLink>
        <NavLink to={"/przepisy/obiad"} className={styles.category}>
          {"obiad"}
        </NavLink>
        <NavLink to={"/przepisy/kolacja"} className={styles.category}>
          {"kolacje"}
        </NavLink>
        <NavLink to={"/przepisy/sałatki"} className={styles.category}>
          {"sałatki"}
        </NavLink>
      </div>
      <Form inputValue={inputValue} setInputValue={setInputValue}>
        Wyszukaj potrawę:
      </Form>
      <div className={styles.recipeCategories}>
        <NavLink
          to={"/przepisy/kalorie/malo_kaloryczne"}
          className={styles.category}
        >
          {"do 300 kcal"}
        </NavLink>
        <NavLink
          to={"/przepisy/kalorie/srednio_kaloryczne"}
          className={styles.category}
        >
          {"do 500 kcal"}
        </NavLink>
        <NavLink to={"/przepisy/sałatki"} className={styles.category}>
          {"do 700 kcal"}
        </NavLink>
        <NavLink to={"/przepisy/sałatki"} className={styles.category}>
          {"do 1000 kcal"}
        </NavLink>
      </div>
    </div>
  );
}
