import React from "react";

import styles from './index.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Данный сайт предоставляет исключительно информационные услуги!</p>
            <div className={styles.years}>© 2017 - 2022</div>
        </footer>
    )
}
