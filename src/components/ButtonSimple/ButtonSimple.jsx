import styles from "./ButtonSimple.module.css";

export function ButtonSimple({ children }) {
  return <button className={styles.dailyMenuButton}> {children}</button>;
}