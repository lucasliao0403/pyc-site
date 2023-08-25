import React from 'react';
import Image from 'next/image'
import styles from '/styles/members.module.css'
import { Caprasimo, Fira_Mono, Abhaya_Libre } from 'next/font/google'
import {team} from '/assets/team.js'
import Draggable from 'react-draggable'; 


const fira_mono = Fira_Mono({ subsets: ['latin'], weight: ["400", "500", "700"] })


export function Member(props) {
    return (
        <Draggable>
        <div  className={`${styles.member} ${fira_mono.className}`}>
            <div  className={styles.headshot}>
                <Image
                draggable={false}
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
        </Draggable>
    );
}

const RenderGroup = ({group}) => { 
    console.log(group)
    return (
    <div className={styles.headshotrow}>
        {group.map( (member) => {
            return(
            <Member name={member.name} position={member.position}/>
            )
        })}
    </div>
    )
}

export const RenderTeam = (props) => {
    let i = 0;
    return (
        <div className={styles.headshotcontainer}>
            {team.map((group) => {
                i++
                return (    
                    i%2===props.side?
                    <RenderGroup group={group}/>
                    :<></>
                )
            })}
        </div>
    )
}

