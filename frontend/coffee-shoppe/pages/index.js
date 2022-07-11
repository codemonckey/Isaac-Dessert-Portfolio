import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/NavigationBar"
import Footer from "../components/Footer"
import AttractiveSignature from "../components/AttractiveSignature"
import MouseFollowAnimation from "../components/MouseFollowAnimation"

export default function Home() {
  return (
    <div>
      <MouseFollowAnimation/>
      <Navbar/>
      <AttractiveSignature/>
      <div className={styles.divi}>
        <div className={styles.blurb}>
          Hello.
        </div>
        <div className={styles.blurb1}>
          I love to help make people's dreams into reality.
        </div>
        <div className={styles.blurb2}>
          Let's make yours happen.
        </div>
      </div>
    </div>  
  )
}