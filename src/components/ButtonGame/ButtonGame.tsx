import React from "react"
import { Link } from "react-router-dom";
import styles from './ButtonGame.module.css'

export const ButtonGame = ({ name }: { name: string }) => {

    return (
        <div className={styles.container}>
            {

                <div className={styles.goHome}>
                    {
                        name === 'Up' ? <a href="#top">{name}</a> :

                            <Link className={styles.link} to='/home'>
                                <span>{name}</span>
                            </Link>
                    }
                </div>
            }
        </div>
    )

}

export default ButtonGame;