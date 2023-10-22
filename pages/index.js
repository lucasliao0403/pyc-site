import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'; 



export default function Home() {
    
  return (
    <div className={styles.home}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
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
