import styles from "./RecipesProducts.module.css";
import { ButtonSimple } from "../../components/ButtonSimple/ButtonSimple";
import { Select } from "../../components/Select/Select";
import { Form } from "../../components/Forms/Form";

export function RecipesProducts() {
  return (
    <div className={styles.recipesProducts}>
      <span>Wybierz produkty, które masz w lodówce</span>
      <div className={styles.selectBox}>
        <Select /* filter={filter} setFilter={setFilter} */>
          Wybierz grupę składników:
        </Select>
        <Form /* inputValue={inputValue} setInputValue={setInputValue} */>
          Wyszukaj składnik:{" "}
        </Form>
      </div>
      <ButtonSimple>Filtruj</ButtonSimple>
    </div>
  );
}
