import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Checkout from "./checkout/checkout"
import Payment from './Payment/Payment'
import Example from './Payment/Example'
import OrderSuccessful from './OrderSuccessful/OrderSuccessful'
export default function Home() {
  return (
    <div className={styles.container}>
         <Checkout></Checkout>
         {/* <Payment/> */}
         {/* <OrderSuccessful/> */}
    </div>
  )
}
