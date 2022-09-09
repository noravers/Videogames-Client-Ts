import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getByName } from "../../state/actions";
import styles from './SearchBar.module.css'

export const SearchBar: React.FC = (props: any) => {

    const [input, setInput] = React.useState<string>('')
    const dispatch = useAppDispatch()


    const getVideogame = (name: string) => {
        dispatch(getByName(name.trim()))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getVideogame(input)
    }

    const clear = () => {
        setInput('')
    }


    return (
        <form onSubmit={e => handleSearch(e)} className={styles.search_box}>
            <input
                className={styles.search_txt}
                value={input}
                type="text"
                placeholder="Search..."
                onChange={handleChange}
            />
            {/* <a type="submit" >Search</a> */}
            <button type="submit" className={styles.search_btn} ><i className="fa-solid fa-magnifying-glass border: none !important"></i></button>
            <div className={styles.search_clear_box} onClick={clear}>
                Clear
            </div>

        </form>

    )
}

export default SearchBar;