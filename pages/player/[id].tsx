import Layout from "../../components/layout";
import { ObjectId } from "bson";
import Player from "../../models/player";
import { collections, connectToDatabase } from "../../services/database.service";
import Game from "../../models/game";
import dayjs from "dayjs";
import { jsonify } from "../../lib/util";

type Props = {
    error: boolean,
    player: Player,
    games: Game[]
}

const Player = ({ error, player, games }: Props) => {
    if (error)
        return (
            <Layout home={ false }>
                <h1>ERROR</h1>
            </Layout>
        )

    return (
        <Layout home={ false }>
            <h1>Player Name: { player.name }</h1>
            <h2>Player Score: { player.total }</h2>
            <h2>Player Games: { games.map(game => dayjs(game.date).format("MMM D, YYYY")) }</h2>
            <h2>This player's end score in the first game they played:</h2>
            <h3>{ games[0].players.find(it => it._id == player._id).end }</h3>
        </Layout>
    )
}

export default Player

export async function getServerSideProps(context) {
    try {
        await connectToDatabase()

        const id = new ObjectId(context.query.id)

        const player = await collections.players.findOne<Player>({ _id: id })
        const games = await collections.games.find({ _id: { $in: player.games } }).toArray() as Game[]

        return {
            props: {
                error: !player || !games,
                player: jsonify(player),
                games: jsonify(games)
            }
        }
    } catch (e) {
        console.error(e)
        return { props: { error: true } }
    }
}