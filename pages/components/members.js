import React from 'react';
import Image from 'next/image'
import styles from '/styles/members.module.css'
import { Caprasimo, Fira_Mono, Abhaya_Libre } from 'next/font/google'

const fira_mono = Fira_Mono({ subsets: ['latin'], weight: ["400", "500", "700"] })


function Member(props) {
    return (
        <div className={`${styles.member} ${fira_mono.className}`}>
            <div className={styles.headshot}>
                <Image
                src={require("/assets/headshot.png")}
                fill={true}
                style={{objectFit: "cover"}}
                alt="member headshot"
                />
            </div>
            <div className={styles.desc}>
                <h2>{props.name}</h2>
                <h3>{props.position}</h3>
            </div>
        </div>
    );
}

export default Member;