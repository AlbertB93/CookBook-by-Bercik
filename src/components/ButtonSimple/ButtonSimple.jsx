import styles from "./ButtonSimple.module.css";

export function ButtonSimple({ children }) {
  return <button className={styles.buttonSimple}> {children}</button>;
}
