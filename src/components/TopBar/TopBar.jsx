import { DailyMenuButton } from "../DailyMenuButton/DailyMenuButton";
import { LogoIcon } from "../LogoIcon/LogoIcon";
import { MainMenu } from "../MainMenu/MainMenu";
import { Title } from "../Title/Title";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <MainMenu></MainMenu>

      <LogoIcon></LogoIcon>
      <Title></Title>
      <DailyMenuButton></DailyMenuButton>
    </div>
  );
}
