import React from 'react';
import Image from 'next/image'
import styles from '/styles/Card.module.css'
import Collapsible from 'react-collapsible';
import Carousel from 'react-material-ui-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import fall from "./fall-bg.png"

function Card(props) {
    console.log(props)
    

    return (
        <div className={styles.card}>
            <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
            <div className={styles.top}>
                <div className={styles.titlewrapper}>
                    <div className={styles.title}>
                        <h1>{props.name}</h1>
                        <Collapsible 
                        trigger="learn more" 
                        className={styles.trigger}
                        triggerStyle={{
                            fontSize:"2rem",
                            cursor: "pointer",
                            outline: "solid black 2px",
                            padding: "0 .5rem 0 .5rem",
                            background: "rgba(255, 255, 255, .6)",
                        }}
                        >
                            <div className={styles.desccontainer}>
                                {/* <Slider> */}
                                    <div className={styles.descimagewrapper}>
                                        <img
                                            draggable={false}
                                            src="/fall-bg.png"
                                            // fill={true}
                                            // style={{objectFit: "cover"}}
                                            alt="fall background"
                                        />
                                    </div>
                                    <div className={styles.descimagewrapper}>
                                        <Image
                                            draggable={false}
                                            src={require("./fall-bg.png")}
                                            fill={true}
                                            style={{objectFit: "cover"}}
                                            alt="fall background"
                                        />
                                    </div>
                                {/* </Slider> */}
                            </div>
                        </Collapsible>
                    </div>
                </div>
            </div>
            <div className={styles.cardimagewrapper}>
                <Image
                draggable={false}
                src={props.bg}
                fill={true}
                style={{objectFit: "cover"}}
                alt="fall background"
                />
            </div>
        </div>
    );
}

export default Card;