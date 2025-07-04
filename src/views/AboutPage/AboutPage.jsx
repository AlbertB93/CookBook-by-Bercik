import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <ContentWrapper>
      <div className={styles.aboutPage}>
        <div className={styles.shortDescription}>
          Strona powstała w wyniku działania hobbystycznego. Jeśli nie masz
          pomysłu co można zjeść na śniadanie, obiad lub kolację dobrze
          trafiłeś! Znajdziesz tu również różne przepisy na sałatki oraz desery,
          które mogą zasmakować Tobie oraz Twoim znajomym.
        </div>

        <div className={styles.inspiationWrapper}>
          <ul>
            Strony / kanały, z których mogą pochodzić przepisy:
            <li>
              {" "}
              <a href="https://www.youtube.com/@PoliczonaSzama" target="_blank">
                Policzona szama
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/fitprzepisyodbaletnicy"
                target="_blank"
              >
                Fit przepisy od baletnicy
              </a>
            </li>
            <li>Kuchnia Martyny Loch</li>
            <li>Adam Mickiewicz gotuje</li>
            <li>Marsia</li>
            <li>Ania Gotuje</li>
            <li>Mocne kalorie</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
}
