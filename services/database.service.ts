import * as mongoDB from "mongodb";
import Game from "../models/game";
import Player from "../models/player";

export const collections: { games?: mongoDB.Collection<Game>, players?: mongoDB.Collection<Player> } = {}

export async function connectToDatabase() {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_URI);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const gamesCollection: mongoDB.Collection<Game> = db.collection("games");
    const playersCollection: mongoDB.Collection<Player> = db.collection("players");

    collections.games = gamesCollection;
    collections.players = playersCollection;

    // console.log(`Successfully connected to database: ${ db.databaseName } and collections: ${ gamesCollection.collectionName }, ${ playersCollection.collectionName }`);
}