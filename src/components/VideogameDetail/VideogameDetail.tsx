import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getById } from "../../state";
import ButtonGame from "../ButtonGame/ButtonGame";
import Loader from "../Loader/Loader";
import styles from './VideogameDetail.module.css'

export const VideogameDetail: React.FC = () => {
    window.scrollTo(0, 0);

    const { id } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch])

    const detail = useAppSelector(state => state.gameDetail)
    const loading = useAppSelector(state => state.loading)


    return (
        <div>
            {
                loading ?
                    <Loader /> :


                    detail?.name ? (
                        <>
                            <div className={styles.detail_container}>
                                <h1 >{detail.name}</h1>
                                <img src={detail.image} alt='' />
                                <h4 >Genres: </h4>
                                <div className={styles.genres}>
                                    {detail.genres && detail.genres.map(e => {
                                        return <span key={e}>{e + ' '}</span>
                                    })}
                                </div>
                                <p ><span>Released:</span> {detail.released}</p>
                                <p ><span>Rating:</span> {detail.rating}</p>
                                <p ><span>Platforms:</span> {detail.platforms}</p>
                                <p ><span>Description:</span> {detail.description}</p>
                            </div>
                            <ButtonGame name="Go Home" />
                        </>


                    ) : <div />
            }

        </div >
    )

}

export default VideogameDetail;