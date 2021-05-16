import styles from "../../styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  const dt = new Date();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy Events Planner {dt.getFullYear()} </p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
}

export default Footer;
