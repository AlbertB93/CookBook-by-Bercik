import styles from "./LogoIcon.module.css";
import LOGO_BOOK from "../../assets/book3.png";
import { Link } from "react-router-dom";
export function LogoIcon() {
  return (
    <Link to="/">
      <img src={LOGO_BOOK} className={styles.logoIcon} />
    </Link>
  );
}
