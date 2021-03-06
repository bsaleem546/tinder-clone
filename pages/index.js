import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Header from '../components/Header'

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `flex flex-col items-center justify-center flex-1`,
}
export default function Home() {
  return (
   <div className={style.wrapper}>
     <header/>
     <div className={style.cardContainer}>
       {/*<Card/>*/}
     </div>
   </div>
  )
}
