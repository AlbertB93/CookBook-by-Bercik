import styles from "./MainMenu.module.css";
import { MENUOPTIONS } from "../../constants/menuOptions";
import { NavLink } from "react-router-dom";

export function MainMenu() {
  return (
    <ul className={styles.mainMenu}>
      {MENUOPTIONS.map((option) => {
        return (
          <li key={option.path}>
            <NavLink to={option.path}>{option.optionName}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
