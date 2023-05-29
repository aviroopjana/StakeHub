import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home(): JSX.Element {
  return (
    <section className={styles.main}>
      <Head>
        <title>Stake Hub</title>
      </Head>
      <Header />
      {/* <Main/> */}
    </section>
  );
}
