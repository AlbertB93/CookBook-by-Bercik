import styles from "./RecipesProducts.module.css";
import { ButtonSimple } from "../../components/ButtonSimple/ButtonSimple";
import { Select } from "../../components/Select/Select";
import { Form } from "../../components/Forms/Form";
import { BACK_END_URL } from "../../constants/api";
import { useEffect, useState } from "react";

export function RecipesProducts() {
  const [products, setProdcts] = useState([]);

  useEffect(() => {
    fetch(`${BACK_END_URL}/products`)
      .then((res) => res.json())
      .then((res) => {
        setProdcts(res);
      });
  }, []);

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
      <div className={styles.productsList}>
        {products.map((product) => (
          <div key={product.id}>
            <input type="checkbox" id={product.id} name={product.name} />
            <label htmlFor={product.id}>{product.name}</label>
          </div>
        ))}
      </div>
      <ButtonSimple>Filtruj</ButtonSimple>
    </div>
  );
}
