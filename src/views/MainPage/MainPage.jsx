import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import styles from "./MainPage.module.css";
import DISH1 from "../../assets/dish1.jpg";
import DISH2 from "../../assets/dish2.jpg";
import DISH3 from "../../assets/dish3.jpg";
import DISH4 from "../../assets/dish4.jpg";
import DISH5 from "../../assets/dish5.jpg";
import DISH6 from "../../assets/dish6.jpg";
export function MainPage() {
  const dishPictures = [
    { id: 1, url: DISH1 },
    { id: 2, url: DISH2 },
    { id: 3, url: DISH3 },
    { id: 4, url: DISH4 },
    { id: 5, url: DISH5 },
    { id: 6, url: DISH6 },
  ];

  return (
    <ContentWrapper>
      <MainMenu></MainMenu>
      <div className={styles.mainPage}>
        <div className={styles.carousel}>
          <div className={styles.group}>
            {dishPictures.map((image) => (
              <div className={styles.card} key={image.id}>
                {image.id % 2 == 0 ? (
                  <img
                    src={image.url}
                    alt="images"
                    className={styles.imgContainerOpacity}
                  />
                ) : (
                  <img
                    src={image.url}
                    alt="images"
                    className={styles.imgContainer}
                  />
                )}
              </div>
            ))}
          </div>
          <div className={styles.group}>
            {dishPictures.map((image) => (
              <div className={styles.card} key={image.id}>
                {image.id % 2 == 0 ? (
                  <img
                    src={image.url}
                    alt="images"
                    className={styles.imgContainerOpacity}
                  />
                ) : (
                  <img
                    src={image.url}
                    alt="images"
                    className={styles.imgContainer}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
