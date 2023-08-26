import React from 'react';
import styles from '/styles/Events.module.css'

function Events() {
    return (
        <div className={styles.events}>
            <div className={styles.grid}>
                <div className={styles.bottom}>
                    bottom
                </div>
                <div className={styles.middle}>
                    middle
                </div>
                <div className={styles.top}>
                    top
                </div>
            </div>
        </div>
    );
}

export default Events;