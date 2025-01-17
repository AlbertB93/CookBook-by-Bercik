import styles from "./RecipesProducts.module.css";
import { Form } from "../../components/Forms/Form";

import { useState } from "react";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import { FilterProductsByGroup } from "../FilterProductsByGroup/FilterProductsByGroup";
import { RecipesProductsList } from "../RecipesProductsList/RecipesProductsList";

export function RecipesProducts() {
  const [showFilterProductsByGroup, setShowFilterProductsByGroup] =
    useState(false);

  const [groupOfProducts, setGroupOfProducts] = useState("wszystkie");

  return (
    <div className={styles.recipesProducts}>
      <ButtonSmall
        onClick={() => setShowFilterProductsByGroup((prevState) => !prevState)}
      >
        Wybierz grupę produktów
      </ButtonSmall>
      {showFilterProductsByGroup && (
        <FilterProductsByGroup
          setGroupOfProducts={setGroupOfProducts}
        ></FilterProductsByGroup>
      )}
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
