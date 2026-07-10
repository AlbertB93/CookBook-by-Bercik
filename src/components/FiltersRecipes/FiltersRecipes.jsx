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

/* 

      <div className={styles.singleFilter}>
        <h3> Grupa posiłku</h3>
        <select
          value={filterGroup}
          onChange={(e) => setFilterGroup(e.target.value)}
        >
          <option value="all">wszystkie</option>
          <option value="breakfast">śniadanie</option>
          <option value="dinner">obiad</option>
          <option value="supper">kolacja</option>
          <option value="salad">sałatki</option>
        </select>
      </div>
      <Form inputValue={inputValue} setInputValue={setInputValue}>
        Wyszukaj potrawę:
      </Form>
      <div className={styles.singleFilter}>
        <h3>Kaloryczność</h3>
        <select
          value={filterCalories}
          onChange={(e) => setFilterCalories(e.target.value)}
        >
          <option value="all">wszystkie</option>
          <option value="300">do 300 kcal</option>
          <option value="500">do 500 kcal</option>
          <option value="700">do 700 kcal</option>
          <option value="1000">do 1000 kcal</option>
        </select>
      </div>
*/
