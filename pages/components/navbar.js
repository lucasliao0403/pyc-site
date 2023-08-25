import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/navbar.module.css'
import Draggable from 'react-draggable'; 

// import Tilt from "react-tilt";

function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                logo
            </div>
            <div className={styles.content}>
                <div className={`${styles.contentelements}`}>
                    <div className={`${styles.imagewrapper} ${styles.image1}`}>
                        <Link href="/" >  
                            <Image
                            src={require("/assets/home.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="home"
                            />
                        </Link>
                        
                    </div>
                </div>
                <div className={`${styles.contentelements}`}>
                    <div className={`${styles.imagewrapper} ${styles.image2}`}>
                        <Link href="./AboutUs"> 
                            <Image
                            src={require("/assets/about.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="about us"
                            />
                        </Link>
                    </div>
                </div>
                <div className={`${styles.contentelements}`}>
                    <div className={`${styles.imagewrapper} ${styles.image3}`}>
                        <Link href="./Events"> 
                            <Image
                            src={require("/assets/events.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="events"
                            />
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className={styles.socials}>
                socials
            </div>
        </div>
    );
}

export default Navbar;