import React from "react"
import styles from '../ErrorPage/ErrorPage.module.css'


export const NotFound: React.FC = (props: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <h1 className={styles.h1}>No Videogames :(</h1>
            </div>
        </div>
    )
}
export default NotFound;