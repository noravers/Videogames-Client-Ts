import React from "react";
import loader from '../../assets/loading.gif'
import styles from './Loader.module.css'

export const Loader: React.FC = () => {

    return (
        <div className={styles.container}>
            <img src={loader} alt="loader" className={styles.img} />
        </div>
    )

}

export default Loader;