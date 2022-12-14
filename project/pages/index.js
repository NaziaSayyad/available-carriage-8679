import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Checkout from "./checkout/checkout"
export default function Home() {
  return (
    <div className={styles.container}>
         <Checkout></Checkout>
    </div>
  )
}
