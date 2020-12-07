import Head from "next/head";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, updateUsername } = useAppContext();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {user}</h1>
        <button onClick={updateUsername}>Change User Display Name</button>
        <h3>{new Date().getTime()}</h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
