import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {FaDotCircle} from 'react-icons/fa'
import car from '../public/png/hatchback.png'



export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* <div className={styles.sidebar}>
          <div className={styles.location}>
            <div className={styles.where_wherever}>
              <div className={styles.marker}>
                <FaDotCircle fontSize={20} style={{color: 'red'}}/>
              </div>
              <input type="text"/>
              <label>Откуда?</label>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.where_wherever}>
              <div className={styles.marker}>
                <FaDotCircle fontSize={20} style={{color: 'black'}}/>
              </div>
              <input type="text"/>
              <label>Куда?</label>
            </div>
          </div>
          <div className={styles.tarif}>
            <div>

            </div>
          </div>
          <div className={styles.oplata}></div>
          <div className={styles.comments_driver}></div>
          <div className={styles.animals}></div>
          <div className={styles.baby_chair}></div>
        </div> */}
      </main>
    </>
  );
}
