import { ObjectId } from "bson";

export default interface Player {
    name: string
    total: number
    games: ObjectId[]
    _id?: ObjectId
}