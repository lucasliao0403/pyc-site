import React from 'react';
import Image from 'next/image'
import styles from '/styles/Events.module.css'

function Events() {
    return (
        <div className={styles.events}>
            <div className={styles.grid}>
                <div className={styles.bottom}>
                    <div className={styles.crochetwrapper}>
                        <div className={styles.crochet}>
                            <Image
                            draggable={false}
                            src={require("/assets/crochet.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="crochet image"
                            />
                        </div>
                    </div>
                    <div className={styles.raccwrapper}>
                        <div className={styles.racc}>
                            <Image
                            draggable={false}
                            src={require("/assets/racc.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="raccoon image"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.middle}>
                    <div className={styles.spacer}/>
                    <div className={styles.grid}>
                        <div className={styles.shipwrapper}>
                            <div className={styles.ship}>
                                <Image
                                draggable={false}
                                src={require("/assets/pirateship.png")}
                                fill={true}
                                style={{objectFit: "cover"}}
                                alt="pirate ship"
                                />
                            </div>
                        </div>
                        <div className={styles.bluetexwrapper}>
                            <div className={styles.bluetex}>
                                <Image
                                draggable={false}
                                src={require("/assets/bluetex.png")}
                                fill={true}
                                style={{objectFit: "fill"}}
                                alt="blue texture"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.picassowrapper}>
                        <div className={styles.picasso}>
                            <Image
                            draggable={false}
                            src={require("/assets/picasso.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="picasso"
                            />
                        </div>
                    </div>
                    <div className={styles.paintbrushwrapper}>
                        <div className={styles.paintbrush}>
                            <Image
                            draggable={false}
                            src={require("/assets/paintbrush.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="paintbrush image"
                            />
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.newspaperwrapper}>
                            <div className={styles.newspaper}>
                                <Image
                                draggable={false}
                                src={require("/assets/newspaper.png")}
                                fill={true}
                                style={{objectFit: "cover"}}
                                alt="newspaper"
                                />
                            </div>
                        </div>
                        <div className={styles.totewrapper}>
                            <div className={styles.tote}>
                                <Image
                                draggable={false}
                                src={require("/assets/pyctote.png")}
                                fill={true}
                                style={{objectFit: "fill"}}
                                alt="PYC tote bag image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.top}>
                    <div className={styles.grid}>
                        <div className={styles.bannerwrapper}>
                            <div className={styles.banner}>
                                <Image
                                draggable={false}
                                src={require("/assets/eventsbanner.png")}
                                fill={true}
                                style={{objectFit: "cover"}}
                                alt="events banner"
                                />
                            </div>
                        </div>
                        <div className={styles.headerwrapper}>
                            <div className={styles.header}>
                                <h1>events</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;