import styles from "./CenteredContent.module.css";

export function CenteredComponent({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
