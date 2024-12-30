import styles from "./LogoIcon.module.css";
import LOGO_BOOK from "../../assets/book5.png";

export function LogoIcon() {
  return <img src={LOGO_BOOK} className={styles.logoIcon} />;
}
