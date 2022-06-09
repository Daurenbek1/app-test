import React from "react";

import { Cards } from '../../component/Cards'
import { Inform } from "../../component/Inform";

import styles from './index.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <Cards />
            <Inform />
        </div>
    )
}

export default Home