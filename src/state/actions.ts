import { ActionType } from "./actionTypes"
import axios from "axios"
import React from "react"
// import { Action } from "history"

axios.defaults.baseURL = process.env.REACT_APP_API || 'https://videogames-api-ts-production.up.railway.app'

export const getVideogames = () => async (dispatch: any) => {
    dispatch({
        type: ActionType.LOADING,
        payload: true
    })
    try {
        const { data } = await axios.get('/videogames',)
        dispatch({
            type: ActionType.GET_VIDEOGAMES,
            payload: data.Data
        })
        dispatch({
            type: ActionType.LOADING,
            payload: false
        })
    } catch (e) {
        console.log(e);
    }
}

export const getByName = (name: string) => async (dispatch: any) => {
    dispatch({
        type: ActionType.LOADING,
        payload: true
    })
    try {
        const { data } = await axios.get(`/videogames?name=${name}`)

        dispatch({
            type: ActionType.GET_BY_NAME,
            payload: data.Data
        })
        dispatch({
            type: ActionType.LOADING,
            payload: false
        })

    } catch (e) {
        console.log(e);
    }
}

export const getById = (id: string | undefined | number) => async (dispatch: any) => {
    dispatch({
        type: ActionType.LOADING,
        payload: true
    })
    try {
        const { data } = await axios.get('/videogame/' + id);
        dispatch({
            type: ActionType.GET_BY_ID,
            payload: data
        })
        dispatch({
            type: ActionType.LOADING,
            payload: false
        })
    } catch (e) {
        console.log(e);
    }
}

export const getGenres = () => async (dispatch: any) => {
    try {
        const { data } = await axios.get('/genres');
        return dispatch({
            type: ActionType.GET_GENRES,
            payload: data
        })
    } catch (e) {
        console.log(e);
    }
}

export const postGame = (videogame: any) => async (dispatch: any) => { //APPLY MIDUDEV INTERFACE

    try {
        await axios.post('/videogame', videogame, {

            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: ActionType.CREATE_GAME
        })
    } catch (e) {
        console.log(e);
    }
}

export const resetVideogames = () => {
    return {
        type: ActionType.RESET_VIDEOGAMES
    }

}

export const sortByName = (payload?: string) => {
    return {
        type: ActionType.ORDER_BY_ABC,
        payload
    }
}

export const sortByRating = (payload?: string) => {
    return {
        type: ActionType.ORDER_BY_RATING,
        payload
    }
}

export const filterByGenre = (payload?: string) => {
    return {
        type: ActionType.FILTER_BY_GENRE,
        payload
    }
}

export const filterByOrigin = (payload?: string) => {
    return {
        type: ActionType.FILTER_BY_ORIGIN,
        payload
    }
}

