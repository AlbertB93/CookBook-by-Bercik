import { LogoIcon } from "../LogoIcon/LogoIcon";
import { Title } from "../Title/Title";
import styles from "./TopBar.module.css";
import LOGO_BOOK from "../../assets/book3.png";
import FELEK from "../../assets/felek.png";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <LogoIcon IMG_URL={LOGO_BOOK}></LogoIcon>
      <Title></Title>

      <img src={FELEK} alt="Zdjęcie" className={styles.imgContainer} />
    </div>
  );
}
