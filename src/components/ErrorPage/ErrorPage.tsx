import React from "react"
import ButtonGame from "../ButtonGame/ButtonGame";
import styles from './ErrorPage.module.css'

export const ErrorPage: React.FC = (props: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <h1 className={styles.h1} >This page doesn't exist</h1>
                <img className={styles.img} src="https://media.giphy.com/media/aFnrLfkvja75K/giphy.gif" alt='' />
            </div>
            <ButtonGame name='Go Home' />
        </div>
    )
}
export default ErrorPage;