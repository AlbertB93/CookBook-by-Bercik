import styles from "./MainPage.module.css";
import { CenteredComponent } from "../../components/CenteredContent/CenteredContent";

export function MainPage() {
  return (
    <CenteredComponent>
      <div className={styles.mainPage}> środek</div>
    </CenteredComponent>
  );
}
