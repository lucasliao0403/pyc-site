import Head from 'next/head'
import Image from 'next/image'
import { Caprasimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const caprisimo = Caprasimo({ subsets: ['latin'], weight: "400" })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${caprisimo.className}`}>
        <div className={styles.grid}>
            <div className={styles.backgroundwrapper}>
                <div className={styles.background}>
                    <Image
                    src={require("/assets/maroonbg.png")}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="background"
                    />
                </div>
            </div>
            <div className={styles.banner}>
                    <Image
                    src={require("/assets/banner.png")}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="banner"
                    />
            </div>
            <div className={styles.header}> 
                <h1> platform for yo<span>uth creativity</span></h1>
            </div>
        </div>
      </main>
    </>
  )
}
