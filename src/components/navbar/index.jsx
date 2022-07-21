import logo from '../../assets/react.svg'
import styles from "./index.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo}></img>
      <h3 className={styles.title}>ReactFacts</h3>
      <h4 className={styles.project}>React Course - Project 1</h4>
    </nav>
  );
}
