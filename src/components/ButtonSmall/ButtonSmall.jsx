import styles from "./ButtonSmall.module.css";

export function ButtonSmall({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.buttonSmall}>
      {" "}
      {children}
    </button>
  );
}
