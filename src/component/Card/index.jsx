import React from "react";

import styles from './index.module.scss';


export const Card = (props) => {
    const { condition, first, max, age, time, url} = props;
    return (
        <div className={styles.card}>
            <img className={styles.logo} src={url}/>
            <h4 className={styles.title}>{condition}</h4>
            <ul>
                <li className={styles.list}>
                    <span>Первый</span>
                    <span>{first}</span>
                </li>
                <li className={styles.list}>
                    <span>Сумма</span>
                    <span>{max}</span>
                </li>
                <li className={styles.list}>
                    <span>Возраст</span>
                    <span>{age}</span>
                </li>
                <li className={styles.list}>
                    <span>Время получения</span>
                    <span>{time}</span>
                </li>
            </ul>
            <button className={styles.btn}>
                Подать заявку
            </button>
        </div>
    )
}