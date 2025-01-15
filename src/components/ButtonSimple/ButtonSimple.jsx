import styles from "./ButtonSimple.module.css";

export function ButtonSimple({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.buttonSimple}>
      {children}
    </button>
  );
}
