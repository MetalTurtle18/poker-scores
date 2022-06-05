import { ObjectId } from "bson";

export default interface Game {
    date: Date
    players: GamePlayer[]
    notes: string
    big_blind: number
    small_blind: number
    standard_buy_in: number
    _id?: ObjectId
}

export interface GamePlayer {
    buy_in: number
    end: number
    notes: string
    _id?: ObjectId
}