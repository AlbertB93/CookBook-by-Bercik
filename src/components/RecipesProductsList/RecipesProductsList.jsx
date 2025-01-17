import { useEffect, useState } from "react";
import { BACK_END_URL } from "../../constants/api";
import styles from "./RecipesProductsList.module.css";

export function RecipesProductsList({ groupOfProducts }) {
  const [products, setProdcts] = useState([]);
  useEffect(() => {
    fetch(`${BACK_END_URL}/products`)
      .then((res) => res.json())
      .then((res) => {
        setProdcts(res);
      });
  }, []);

  return (
    <div className={styles.productsList}>
      {groupOfProducts === "wszystkie"
        ? products.map((product) => (
            <div key={product.id}>
              <input type="checkbox" id={product.id} name={product.name} />
              <label htmlFor={product.id}>{product.name}</label>
            </div>
          ))
        : products
            .filter((el) => el.group === groupOfProducts)
            .map((product) => (
              <div key={product.id}>
                <input type="checkbox" id={product.id} name={product.name} />
                <label htmlFor={product.id}>{product.name}</label>
              </div>
            ))}
    </div>
  );
}
