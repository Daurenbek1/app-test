import React from "react";

import styles from './index.module.scss';

import { Card } from "../Card";

export const Cards = () => {
    const cards = [
        {
            id: 1,
            condition: 'Без переплат 0,1%',
            first: '145 000 ₸',
            max: 'мах 145 000 ₸',
            age: '19 до 70',
            time: '15 мин.',
            url: '/assets/cards/item1.png'
        },
        {
            id: 2,
            condition: 'Первый без переплат',
            first: '145 000 ₸',
            max: 'мах 145 000 ₸',
            age: '18 до 75',
            time: '15 мин.',
            url: '/assets/cards/item2.png'
        },
        {
            id: 3,
            condition: 'Новым клиентам 0,01%',
            first: 'до 90 000 ₸',
            max: 'мах 145 000 ₸',
            age: '18 до 75',
            time: '5 мин.',
            url: '/assets/cards/item3.png'
        },
        {
            id: 4,
            condition: 'Первые 7 дней 0%',
            first: '145 000 ₸',
            max: 'мах 145 000 ₸',
            age: '21 до 73',
            time: '10 мин.',
            url: '/assets/cards/item4.png'
        },
        {
            id: 5,
            condition: 'Первый без переплат',
            first: '145 000 ₸',
            max: 'мах 145 000 ₸',
            age: '21 до 75',
            time: '15 мин.',
            url: '/assets/cards/item5.png'
        },
        {
            id: 6,
            condition: 'Без переплат',
            first: '145 000 ₸',
            max: 'мах 145 000 ₸',
            age: '21 до 75',
            time: '15 мин.',
            url: '/assets/cards/item6.png'
        }
    ]
    return (
        <div className={styles.cards}>
            {
                cards.map((card) =>
                    <Card key={card.id}
                        condition={card.condition}
                        first={card.first}
                        max={card.max}
                        age={card.age}
                        time={card.time}
                        url={card.url}
                    />)
            }
        </div>
    )
}