import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Game } from "../../types/types";
import { getGenres, getVideogames, resetVideogames, sortByName } from "../../state/actions";
import styles from './Home.module.css'
import Filters from "../Filters/Filters";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import VideogameCard from "../VIdeogameCard/VideogameCard";
import ButtonGame from "../ButtonGame/ButtonGame";
import NotFound from "../NotFound/NotFound";
import { Link } from "react-router-dom";


export const Home: React.FC = () => {

    window.scrollTo(0, 0);

    const { games, genres, loading, gamesDefault } = useAppSelector((state) => state)
    const dispatch = useAppDispatch()

    //Pagination
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const gamesPerPage = 9;
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    //Filter and Sorting
    const [order, setOrder] = React.useState<string>('')

    console.log(games);



    useEffect(() => {
        !gamesDefault.length && dispatch(getVideogames())
        !genres.length && dispatch(getGenres())

    }, [games])

    useEffect(() => {
        setOrder('')
    }, [order])

    const bringAllVideogames = () => {
        dispatch(resetVideogames())
        setCurrentPage(1)
    }




    return (
        <>
            <div className={styles.container_nav}>
                <div className={styles.container_nav_each}>
                    <button className={styles.vgames}>
                        <Link to='/'>
                            <p>V</p><span>Games</span>
                        </Link>
                    </button>
                </div>
                <div className={styles.container_nav_each}>
                    <Link to='/addGame'>Add Videogame</Link>
                </div>
                <div className={styles.container_nav_each}>
                    <SearchBar />
                </div>
            </div>
            <div className={styles.container_filters}>
                <div className={styles.filters}>
                    <Filters
                        setOrder={(order: string) => setOrder(order)}
                        setPage={(page: number) => setCurrentPage(page)}
                    />
                </div>
                <button onClick={bringAllVideogames}>All Videogames</button>

            </div>
            <div className={styles.container_pagination}>
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={gamesPerPage}
                    totalItems={games.length}
                    setPage={(page: number) => setCurrentPage(page)}
                />
            </div>

            {
                loading ? (
                    <Loader />
                ) :
                    games.length !== 0 ?

                        < div className={styles.container_cards}>
                            {
                                currentGames.map((game: Game) => (
                                    <VideogameCard key={game.id} game={game} />
                                ))
                            }
                        </div> :
                        <NotFound />
            }

            {
                !loading && games.length &&
                < ButtonGame name='Up' />

            }

        </>
    );
};

export default Home;