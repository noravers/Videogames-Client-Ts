import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/videogame.png'
import styles from './LandingPage.module.css'



export const LandingPage: React.FC = (props: any) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h1>Videogame Project</h1>
            </div>
            <div className={styles.cardImg}>
                <img src={logo} />
            </div>
            <Link className={styles.link} to='home'>
                <div className={styles.cardButton}>
                    <span >Start</span>
                </div>
            </Link>
        </div>
    );
};

export default LandingPage;