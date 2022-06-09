import React from "react";

import styles from './index.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.inner}>
                    <div className={styles.item}>
                        <h1 className={styles.title}>Онлайн кредит без справок и поручителей</h1>
                        <p className={styles.descr}>Сравним и подберем лучшие условия для Вас!</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.lang}>
                            <button className={styles.btnActive}>
                                RU
                            </button>
                            <button className={styles.btn}>
                                KZ
                            </button>
                        </div>
                        <a className={styles.number} href="tel:6904">
                            6901
                        </a>
                        <p className={styles.call}>звонок бесплатный</p>
                        <a className={styles.whatsapp} href="https://wa.me/77088086901" target='_blank'>8 708 808 6901</a>
                    </div>
                </div>
            </div>
        </header>
    )
}