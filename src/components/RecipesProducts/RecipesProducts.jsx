import styles from "./RecipesProducts.module.css";
import { Form } from "../../components/Forms/Form";
import { useState } from "react";
import { RecipesProductsList } from "../RecipesProductsList/RecipesProductsList";

export function RecipesProducts({ groupOfProducts }) {
  return (
    <div className={styles.recipesProducts}>
      <div className={styles.selectBox}>
        <Form /* inputValue={inputValue} setInputValue={setInputValue} */>
          Wyszukaj składnik:{" "}
        </Form>
      </div>
      <RecipesProductsList
        groupOfProducts={groupOfProducts}
      ></RecipesProductsList>
    </div>
  );
}
