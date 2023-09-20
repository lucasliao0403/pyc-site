import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'; 


export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>PYC</title>
        <meta name="description" content="Platform for Youth Creativity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
            <Draggable>
                <div className={styles.banner}>

                        <Image
                        src={require("/assets/banner.png")}
                        fill={true}
                        style={{objectFit: "cover"}}
                        alt="banner"
                        draggable={false}
                        />
  
                </div>
            </Draggable>
            <Draggable>
                <div className={styles.header} > 
                    <h1> platform for yo<span>uth creativity</span></h1>
                </div>
            </Draggable>
        </div>
      </main>
    </div>
  )
}
