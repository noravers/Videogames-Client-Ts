import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { getGenres } from "../../state"
import { filterByGenre, filterByOrigin, sortByName, sortByRating } from '../../state/actions'
import { Game, Genre } from "../../types/types"
import styles from './Filters.module.css'

export const Filters = ({
    setOrder,
    setPage
}: {
    setOrder: (order: string) => void
    setPage: (page: number) => void
}) => {

    const genres = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch()

    // const myElement = React.useRef<HTMLSelectElement>(null);
    // console.log(myElement);


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target

        name === 'abc' && dispatch(sortByName(value));
        name === 'rating' && dispatch(sortByRating(value));
        name === 'genres' && dispatch(filterByGenre(value));
        name === 'origin' && dispatch(filterByOrigin(value));
        setOrder(`Set order by ${value}`)
        setPage(1)

    }


    return (
        <div className={styles.container}>
            <select id='abc' name='abc' className={styles.abc} onChange={(e) => { handleSelect(e) }}>
                <option value='DEFAULT' hidden>Abc Order</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>

            <select name='rating' className={styles.rating} onChange={(e) => { handleSelect(e) }}>
                <option value='DEFAULT' hidden>Rating Order</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>

            <select name='genres' className={styles.genres} onChange={(e) => { handleSelect(e) }}>
                <option className={styles.option} value='DEFAULT' hidden>Genres</option>
                {genres?.map((e: Genre) => (
                    <option
                        key={e.id}
                    >{e.name}</option>
                ))}
            </select>
            <select name='origin' className={styles.origin} onChange={(e) => { handleSelect(e) }}>
                <option value='DEFAULT' hidden>Origin</option>
                <option>Added</option>
                <option>Api</option>
            </select>
        </div>
    )
}

export default Filters;