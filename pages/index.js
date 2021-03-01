import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name='keywords' content='user' />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          dolorum, pariatur consequuntur inventore rerum consectetur fugiat
          nobis dignissimos odio cupiditate aliquid debitis hic sequi sed at
          repellat. Rerum, ex dolorem?
        </p>
        <Link href='/users'>
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
