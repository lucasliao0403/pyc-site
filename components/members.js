import React from 'react';
import Image from 'next/image'
import styles from '/styles/members.module.css'
import {team} from '/assets/team.js'
import Draggable from 'react-draggable'; 


export function Member(props) {
    return (
        <Draggable>
        <div  className={styles.member}>
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
    // console.log(group)
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

