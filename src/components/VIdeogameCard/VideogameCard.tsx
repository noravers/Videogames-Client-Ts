import React from "react";
import { Link } from "react-router-dom";
import { Game } from "../../types/types";
import styles from "./VideogameCard.module.css";

export const VideogameCard = ({ game }: { game: Game }) => {

    return (
        <div className={styles.container}>
            <Link to={`/videogame/${game.id}`}>

                <div className={styles.infoContainer}>
                    <p className={styles.name}>{game.name}</p>
                    <img className={styles.image} src={game.image} alt={game.name} />
                    <div className={styles.genres}>
                        {game.genres.map(genre => (
                            <p key={genre}>{genre}</p>
                        ))}
                    </div>
                </div>
            </Link>

        </div>

    )
}

export default VideogameCard;