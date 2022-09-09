import { ActionType } from './actionTypes'
import { Game, GameDetail, Genre } from '../types/types'
// import { Action } from 'history'


interface State {
    games: Game[]
    gamesDefault: Game[]
    gameDetail: GameDetail | null
    genres: Genre[]
    loading: boolean

}

const initialState: State = {
    games: [],
    gamesDefault: [],
    gameDetail: null,
    genres: [],
    loading: false
}


export const reducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ActionType.LOADING:
            return {
                ...state, loading: action.payload
            }
        case ActionType.GET_VIDEOGAMES:
            return {
                ...state, games: action.payload, gamesDefault: action.payload
            }
        case ActionType.GET_BY_NAME:
            return {
                ...state, games: action.payload
            }
        case ActionType.GET_BY_ID:
            return {
                ...state, gameDetail: action.payload
            }
        case ActionType.GET_GENRES:
            return {
                ...state, genres: action.payload
            }
        case ActionType.CREATE_GAME:
            return {
                ...state
            }
        case ActionType.RESET_VIDEOGAMES:
            return {
                ...state, games: state.gamesDefault
            }
        case ActionType.ORDER_BY_ABC:
            let sorted = action.payload === 'Ascending' ? state.games.sort((a: Game, b: Game) =>
                a.name.localeCompare(b.name)) :
                state.games.sort((a: Game, b: Game) => b.name.localeCompare(a.name))
            return {
                ...state, games: sorted
            }
        case ActionType.ORDER_BY_RATING:
            let sorted2 = action.payload === 'Ascending' ? state.games.sort((a: Game, b: Game) =>
                b.rating - a.rating) :
                state.games.sort((a: Game, b: Game) => a.rating - b.rating)
            return {
                ...state, games: sorted2
            }
        case ActionType.FILTER_BY_GENRE:
            let sorted4 = state.gamesDefault.filter((e: Game) => e.genres.includes(action.payload))
            return {
                ...state, games: sorted4
            }
        case ActionType.FILTER_BY_ORIGIN:
            let sorted3 = action.payload === 'Added' ? state.gamesDefault.filter((e: Game) => e.createdInDb) :
                state.gamesDefault.filter((e: Game) => !e.createdInDb)
            return {
                ...state, games: sorted3
            }

        default:
            return state;

    }

}

export default reducer;