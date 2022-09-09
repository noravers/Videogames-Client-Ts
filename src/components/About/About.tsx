import React from "react";
import styles from '../ErrorPage/ErrorPage.module.css'
import stylesAbout from './About.module.css'
import logo from '../../assets/videogame.png'
import ButtonGame from "../ButtonGame/ButtonGame";

export const About: React.FC = () => {
    return (



        <>
            <div className={stylesAbout.itemsContainer}>
                <div className={stylesAbout.imgContainer}>
                    <img src={logo} className={styles.img} alt='videogames' />
                </div>
                <div className={stylesAbout.container_link}>Code by
                    <a
                        className={stylesAbout.link}
                        href='https://www.linkedin.com/in/a92818230/'
                        rel='noreferrer'
                        target='_blank'                >
                        Nora Rodríguez
                    </a>

                    <a
                        className={stylesAbout.link}
                        href='https://www.linkedin.com/in/a92818230/'
                        rel='noreferrer'
                        target='_blank'                >
                        LinkedIn
                    </a>
                    <a
                        className={stylesAbout.link}
                        href='https://github.com/noravers'
                        rel='noreferrer'
                        target='_blank'                >
                        Github
                    </a>

                </div>
            </div>
            <div className={stylesAbout.button}>
                <ButtonGame name='Go Home' />
            </div>
        </>

    )
}

export default About;