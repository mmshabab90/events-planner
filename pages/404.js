import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "./components/Layout";
import styles from "../styles/404.module.css";
import Link from "next/link";

function NotFoundPage() {
  return (
    <Layout title="404-Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Housten, we have a problem...</h4>
        <Link href="/">Go Back to Home</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
