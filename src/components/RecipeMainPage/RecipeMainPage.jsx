import { NavLink } from "react-router-dom";
import styles from "./RecipeMainPage.module.css";

export function RecipeMainPage({ id, title, imgUrl }) {
  return (
    <NavLink to={`/przepis/${id}`}>
      <div className={styles.recipeMainPage}>
        <div className={styles.imgWrapper}>
          {" "}
          <img src={imgUrl} alt="image of dishes" className={styles.image} />
        </div>{" "}
        <span className={styles.title}>{title}</span>
      </div>{" "}
    </NavLink>
  );
}
