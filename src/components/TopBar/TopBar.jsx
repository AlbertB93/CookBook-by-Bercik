import { LogoIcon } from "../LogoIcon/LogoIcon";
import { Title } from "../Title/Title";
import styles from "./TopBar.module.css";
import LOGO_BOOK from "../../assets/book3.png";
import FELEK from "../../assets/felek.png";
import { NavLink } from "react-router-dom";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.corner}>
        <NavLink to={"/przepisy"}>{"Wszystkie przepisy"}</NavLink>
      </div>
      <div className={styles.topBarCenter}>
        <LogoIcon IMG_URL={LOGO_BOOK}></LogoIcon>
        <Title></Title>
        <img src={FELEK} alt="Zdjęcie" className={styles.imgContainer} />{" "}
      </div>
      <div className={styles.corner}>
        <NavLink to={"/o-stronie"}>{"O stronie"}</NavLink>
      </div>
    </div>
  );
}
