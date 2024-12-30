import { LogoIcon } from "../LogoIcon/LogoIcon";
import { Title } from "../Title/Title";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <LogoIcon></LogoIcon>
      <Title></Title>
    </div>
  );
}
