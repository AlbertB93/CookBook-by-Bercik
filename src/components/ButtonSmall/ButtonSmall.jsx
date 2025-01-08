import styles from "./ButtonSmall.module.css";

export function ButtonSmall({ children }) {
  return <button className={styles.buttonSmall}> {children}</button>;
}
