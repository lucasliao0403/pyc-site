import React from 'react';
import Image from 'next/image'
import styles from '/styles/footer.module.css'


function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.bg}>
                    <Image
                    draggable={false}
                    src={require("/assets/footerbg.png")}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="footer background"
                    />
                </div>
                <div className={styles.content}>
                    content
                </div>
            </div>
        </div>
    );
}

export default Footer;