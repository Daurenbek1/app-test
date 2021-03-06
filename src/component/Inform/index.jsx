import React from "react";

import styles from './index.module.scss';

export const Inform = () => {
    return (
        <ul className={styles.inform}>
            <li className={styles.list}>
                <span>1. </span>
                <p>Позвонив нам Вы получите подробную консультацию по всем Вашим вопросам от наших операторов.</p>
            </li>
            <li className={styles.list}>
                <span>2. </span>
                <p>Для получения займа достаточно одного документа - удостоверение личности. Без залога, без дохода, без пенсионных отчислений, с действующим кредитом, пенсионерам и студентам.</p>
            </li>
            <li className={styles.list}>
                <span>3. </span>
                <p>Режим работы нашего колл-центра 6901 с 09:00 - 20:00 ежедневно без выходных.</p>
            </li>
            <li className={styles.list}>
                <span>4. </span>
                <p>Наши операторы помогут Вам оформить заявку правильно, для повышения вероятности одобрения.</p>
            </li>
            <li className={styles.list}>
                <span>5.  </span>
                <p>Если Вы зашли на сайт в нерабочее время нашего центра 6901, то Вы можете попробовать самостоятельно оформить займ выбрав одно из представленных МФО кликнув на “Подать заявку”, пошагово заполнив поля.</p>
            </li>
        </ul>
    )
}