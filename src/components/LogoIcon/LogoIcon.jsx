import styles from "./LogoIcon.module.css";
import { Link } from "react-router-dom";
export function LogoIcon({ IMG_URL }) {
  return (
    <Link to="/">
      <img src={IMG_URL} className={styles.logoIcon} />
    </Link>
  );
}
