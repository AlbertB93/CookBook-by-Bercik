import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <ContentWrapper>
      <div className={styles.aboutPage}>
        <div className={styles.shortDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam
          hic, perspiciatis unde nemo inventore autem ullam. Harum non,
          consequatur nihil recusandae, vero a maxime molestias unde eaque nisi
          explicabo. Beatae, fugit? Ut sapiente repudiandae, deleniti officia
          nostrum dolorem consequuntur eos cumque eum enim velit necessitatibus
          atque ducimus est nihil accusantium sint officiis rem ipsa incidunt.
          Ratione, velit voluptates! Nemo? Officia reprehenderit eum ducimus
          odio ab, illum quibusdam. Laborum necessitatibus provident ipsa
          debitis eligendi ab amet doloremque libero odit similique possimus,
          quia voluptatibus voluptate mollitia porro cupiditate at esse itaque.
          Impedit, voluptatibus! Dolorem, ut praesentium quia consectetur
          similique, veritatis ea, vel itaque numquam necessitatibus ad iure
          possimus labore consequuntur officia. Obcaecati debitis ut quis
          necessitatibus quos quisquam non recusandae distinctio? Quo,
          perferendis labore magni beatae quod deserunt odit voluptas dolor.
          Consectetur distinctio inventore consequatur libero unde animi saepe,
          eum cumque incidunt adipisci molestias. Doloremque non reprehenderit
          asperiores veritatis esse nobis!
        </div>

        <div className={styles.inspiationWrapper}>
          <ul>
            Strony / kanały, z których mogą pochodzić przepisy
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
}
