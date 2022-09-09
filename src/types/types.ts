export interface Game {
    id: number
    name: string
    image: string | undefined
    genres: string[]
    rating: number
    createdInDb?: boolean
}

export interface GameDetail extends Game {
    description: string
    released?: string
    platforms: string[]

}

export interface Genre {
    id: number
    name: string
}

export interface FormState {
    name: string,
    description: string,
    released: string, //FIX
    genres: Genre[],
    rating: string, //FIX
    platforms: string[]
}