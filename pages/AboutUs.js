import React from 'react';
import Image from 'next/image'
import styles from '/styles/AboutUs.module.css'
import { Caprasimo, Fira_Mono, Abhaya_Libre } from 'next/font/google'
import Member from './components/members'
import {team} from '/assets/team.js'

const fira_mono = Fira_Mono({ subsets: ['latin'], weight: ["400", "500", "700"] })


function AboutUs(props) {

    const RenderGroup = ({group}) => { 
        console.log(group)
        return (
        <div className={styles.headshotcontainer}>
            {group.map( (member) => {
                return(
                <Member name={member.name} position={member.position}/>
                )
            })}
        </div>
        )
    }

    const RenderTeam = (props) => {
        return (
            <div>
                {team.map((group) => {
                    return (
                        
                            <RenderGroup group={group}/>

                    )
                })}
            </div>
        )
    }

    

    return (
        <div>
            <div className={styles.grid}>
                <div className={styles.bottom}>
                    <div className={styles.pencilwrapper}>
                        <div className={styles.pencil}>
                            <Image
                            src={require("/assets/pencil.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="background"
                            />
                        </div>
                    </div>

                    <div className={styles.penguinwrapper}>
                        <div className={styles.penguin}>
                            <Image
                            src={require("/assets/penguin.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="background"
                            />
                        </div>
                    </div>

                    

                </div>
                <div className={styles.middle}>
                    <div className={styles.greenwrapper}>
                        <div className={styles.green}>
                            <Image
                            src={require("/assets/greentex.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="background"
                            />
                        </div>
                    </div>

                    <div className={styles.paintingwrapper}>
                        <div className={styles.painting}>
                            <Image
                            src={require("/assets/painting.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="background"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.top}>
                    <div className={`${styles.header} ${fira_mono.className}`}>
                        <div> <h1> about us </h1> </div>
                    </div>
                    <div className={`${styles.grid} ${fira_mono.className}`}>
                        <div className={styles.teamwrapper}>
                            <div className={styles.team}>
                                <Image
                                src={require("/assets/team.png")}
                                fill={true}
                                style={{objectFit: "cover"}}
                                alt="background"
                                />
                            </div>
                        </div>
                        <div className={styles.teamdescwrapper}>
                            <div className={styles.teamdesc}>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in yo mama’s house velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.headshotheader} ${fira_mono.className}`}>
                        <h1> meat da team</h1>
                    </div>

                    <div className={styles.headshotflex}>
                        <div className={styles.headshotflexbox}> 
                            <RenderTeam/>
                        </div>
                        <div className={styles.headshotflexbox}> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;