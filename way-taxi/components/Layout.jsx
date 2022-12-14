import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Navbar from "./Navbar";
import Map from "./Map";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.navbarMain}>
        <Navbar />
        {children}
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
};

export default Layout;
