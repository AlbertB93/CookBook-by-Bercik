import { useState } from "react";
import { FilterByCalories } from "../FilterByCalories/FilterByCalories";
import { FilterByGroup } from "../FilterByGroup/FilterByGroup";
import styles from "./FiltersRecipes.module.css";
import { Form } from "../Forms/Form";

export function FilterRecipes({ filter, setFilter }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles.filterRecipes}>
      <div className={styles.singleFilter}>
        <h3> Grupa posiłku</h3>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">wszystkie</option>
          <option value="breakfast">śniadanie</option>
          <option value="dinner">obiad</option>
          <option value="supper">kolacja</option>
          <option value="salad">sałatki</option>
        </select>
      </div>
      <div className={styles.singleFilter}>
        <h3>Kaloryczność</h3>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">wszystkie</option>
          <option value="breakfast">śniadanie</option>
          <option value="dinner">obiad</option>
          <option value="supper">kolacja</option>
          <option value="salad">sałatki</option>
        </select>
      </div>
      <Form inputValue={inputValue} setInputValue={setInputValue}>
        Wyszukaj potrawę:{" "}
      </Form>
    </div>
  );
}
