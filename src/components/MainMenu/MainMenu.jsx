import styles from "./MainMenu.module.css";
import { MENUOPTIONS } from "../../constants/menuOptions";
import { NavLink } from "react-router-dom";

export function MainMenu() {
  return (
    <div className={styles.mainMenu}>
      <NavLink to={"/przepisy/sniadanie"}>zacznij dobrze dzień</NavLink>
      <NavLink to={"/o-stronie"}>coś na ząb</NavLink>
      <NavLink to={"/o-stronie"}>obiaaaad</NavLink>
      <NavLink to={"/przepisy/deser"}>sama słodycz</NavLink>
    </div>
  );
}
