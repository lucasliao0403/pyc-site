import React from 'react';
import Image from 'next/image'
import styles from '/styles/Card.module.css'
import Collapsible from 'react-collapsible';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.titlewrapper}>
                    <div className={styles.title}>
                        <h1>fall coffeehouse</h1>
                        <Collapsible trigger="Learn More" className={styles.trigger}>
                            <p>be</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
            <div className={styles.cardimagewrapper}>
                <Image
                draggable={false}
                src={require("/assets/fall-bg.png")}
                fill={true}
                style={{objectFit: "cover"}}
                alt="fall background"
                />
            </div>
        </div>
    );
}

export default Card;