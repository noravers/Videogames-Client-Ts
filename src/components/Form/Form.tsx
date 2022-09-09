import React, { useEffect, useState } from "react";
import ButtonGame from "../ButtonGame/ButtonGame";
import styles from './Form.module.css'
import { getVideogames, postGame } from "../../state/actions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Game, Genre, FormState } from "../../types/types";
import platformsGlobal from "../../helpers/platforms";


const initialState: FormState = { // interface checar midudev
    name: '',
    description: '',
    released: '',
    genres: [],
    rating: '',
    platforms: [],
}

export const Form: React.FC = () => {
    const genresGlobal = useAppSelector(state => state.genres)
    const [input, setInput] = React.useState<FormState>(initialState) //checar midudev
    const { name, description, released, genres, rating, platforms } = input
    const [error, setError] = React.useState<any>({})
    const videogames = useAppSelector(state => state.games)



    const dispatch = useAppDispatch()
    const genresNames = genres.map((e: Genre) => e.name)
    const genresid = genres.map((e: Genre) => e.id)


    function verifyName(el: string) {
        const videogamesFiltered = videogames.map((e: Game) => e.name)
        return videogamesFiltered.filter(e => e === el).length ? true : false
    };

    // useEffect(() => {
    //     if (error.nameError) {
    //         if (name !== '') {
    //             if ((!/^.{5,}/.test(name.trim()))) {
    //                 setError({ ...error, nameError: 'Name is invalid' })
    //             } else {
    //                 setError({ ...error, nameError: null })
    //             }
    //         }
    //     }
    // }, [name])

    useEffect(() => {
        if (error.ratingError) {
            if (rating !== '') {
                if (!/^([0-5]{1})(\.[0-9]{1})?$/.test(rating.trim())) {
                    setError({ ...error, ratingError: 'Rating invalid. Example: 3.5 or 5' })
                } else {
                    setError({ ...error, ratingError: null })
                }
            }
        }
    }, [rating])

    useEffect(() => {
        if (error.releasedError) {
            if (released !== '') {
                setError({ ...error, releasedError: null })
            }
        }
    }, [released])

    useEffect(() => {
        if (error.genresError) {
            if (genres.length > 0) {
                setError({ ...error, genresError: null })
            }
        }
    }, [genres])

    useEffect(() => {
        if (error.platformsError) {
            if (platforms.length > 0) {
                setError({ ...error, platformsError: null })
            }
        }
    }, [platforms])

    useEffect(() => {
        if (error.descriptionError) {
            if (description !== '') {
                if (!/^.{20,}/.test(description.trim())) {
                    setError({ ...error, descriptionError: 'Description must contain at least 20 characters' })
                } else {
                    setError({ ...error, descriptionError: null })
                }
            }
        }
    }, [description])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(validateValue({ genres, platforms, description, name, rating, released }))
        let errorCheck = validateValue({ genres, platforms, description, name, rating, released })
        if (Object.values(errorCheck).length === 0) {
            alert('Activity created')
            dispatch(postGame({ ...input, genres: genresid }))
            setError({})
            setInput(initialState)
            window.setTimeout(() => {
                dispatch(getVideogames())
            }, 1000)

        }
    }

    function validateValue({ genres, platforms, description, name, rating, released }: FormState) {
        const errors: any = {}
        // console.log(verifyName(name));
        if (!name) {
            errors.nameError = "Name is required";
        } else if ((!/^.{5,}/.test(name.trim()))) {
            errors.nameError = "Name is invalid"
        } else if (verifyName(name)) {
            errors.nameError = "Videogame with that name already exists"
        }
        if (!description) {
            errors.descriptionError = "Description is required";
        } else if (!/^.{20,}/.test(description.trim())) {
            errors.descriptionError = "Description is invalid";
        }
        if (!rating) {
            errors.ratingError = "Rating is required";
        } else if (!/^([0-5]{1})(\.[0-9]{1})?$/.test(rating.trim())) {
            errors.ratingError = 'Rating invalid. Example: 3.5 or 5'
        }
        if (!released) {
            errors.releasedError = "Released is required";
        }
        if (platforms.length === 0) {
            errors.platformsError = "Select at least a platform";
        }
        if (genres.length === 0) {
            errors.genresError = 'Select at least a genre';
        }
        return errors;
    }

    const removeGenres = (e: React.MouseEvent<HTMLButtonElement>) => {
        const genresFiltered = genres.filter((el: Genre) => el.name !== e.currentTarget.name)
        setInput({ ...input, genres: genresFiltered })
    }

    const removePlatforms = (e: React.MouseEvent<HTMLButtonElement>) => {
        const filtered = platforms.filter((el: string) => el !== e.currentTarget.name)
        setInput({ ...input, platforms: filtered })
    }

    const handleGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const data = genresGlobal.filter((el: Genre) => el.name === e.target.value)
        setInput({ ...input, genres: [...input.genres, ...data] })
    }

    const handlerPlatforms = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInput({ ...input, platforms: [...input.platforms, e.target.value] })
    }



    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <h1>Videogame Form</h1>
                    <form name='formAct' className={styles.container_form} onSubmit={e => handleSubmit(e)}>
                        <div className={styles.container_input}>
                            <input
                                className={styles.input_name}
                                type="text"
                                placeholder="Name..."
                                value={input.name}
                                onChange={e => setInput({ ...input, name: e.target.value })}
                            />
                            {error.nameError && (
                                <p className={styles.p}>{error.nameError}</p>
                            )}
                        </div>
                        <div className={styles.container_input}>
                            <textarea
                                className={styles.input}
                                placeholder='Description... at least a paragraph'
                                value={input.description}
                                onChange={e => setInput({ ...input, description: e.target.value })}
                            ></textarea>
                            {error.descriptionError && (
                                <p className={styles.p}>{error.descriptionError}</p>
                            )}
                        </div>
                        <div className={styles.container_input}>
                            <input
                                className={styles.input_rating}
                                placeholder="Rating...  range: 1-5"
                                onChange={e => setInput({ ...input, rating: e.target.value })}
                                value={input.rating}
                            />
                            {error.ratingError && (
                                <p className={styles.p}>{error.ratingError}</p>
                            )}
                        </div>
                        <div className={styles.container_input}>
                            <input
                                className={styles.input_released}
                                type='date'
                                placeholder="Release date..."
                                onChange={e => setInput({ ...input, released: e.target.value })}
                                value={input.released}
                            />
                            {error.releasedError && (
                                <p className={styles.p}>{error.releasedError}</p>
                            )}
                        </div>
                        <div className={styles.container_input}>
                            <select
                                className={styles.input_genres}
                                onChange={e => handleGenres(e)}
                            >
                                <option value='DEFAULT'>Genres</option>
                                {genresGlobal?.map((e: Genre) => {
                                    return (!genresNames.includes(e.name)) && <option key={e.id}>{e.name}</option>
                                }
                                )}
                            </select>
                            {error.genresError && (
                                <p className={styles.p}>{error.genresError}</p>
                            )}
                        </div>
                        <div className={styles.box}>
                            {genres.length > 0 && genres.map((el: Genre) =>
                                <div className={styles.box_} key={el.id}>
                                    <span>{el.name}</span>
                                    <button className={styles.x} name={el.name} onClick={e => removeGenres(e)}>❌</button>
                                </div>
                            )}
                        </div>
                        <div className={styles.container_input}>
                            <select
                                className={styles.input_platforms}
                                onChange={(e) => { handlerPlatforms(e) }}
                            >
                                <option value='DEFAULT'>Platforms</option>
                                {platformsGlobal?.map((e: string) => {
                                    return (!platforms.includes(e)) && <option key={e}>{e}</option>
                                }
                                )}
                            </select>
                            {error.platformsError && (
                                <p className={styles.p}>{error.platformsError}</p>
                            )}
                        </div>
                        <div className={styles.box}>
                            {platforms.length > 0 && platforms.map((e: string) =>
                                <div className={styles.box_} key={e}>
                                    <span>{e}</span>
                                    <button className={styles.x} name={e} onClick={(e) => { removePlatforms(e) }}>❌</button>
                                </div>
                            )}
                        </div>
                        <div className={styles.container_button}><button className={styles.button_form} type='submit'>Add</button></div>
                    </form>
                </div>
                <ButtonGame name='Go Home' />
            </div>
        </>
    )
}

export default Form;