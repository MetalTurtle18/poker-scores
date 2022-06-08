import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from "./_layout";
import dayjs from "dayjs";
import { collections, connectToDatabase } from "../services/database.service";
import Player from "../models/player";
import Game from "../models/game";
import { jsonify } from "../lib/util";

type Props = {
    error: boolean,
    players: Player[],
    games: Game[]
}

const index = ({ error, players, games }: Props) => {
    return (
        <Layout>
            <Head>
                <title>{ siteTitle + " - SCORES" }</title>
            </Head>
            <Image
                src="/images/banner.svg"
                alt="Poker Club banner"
                width={ 1920 / 3 }
                height={ 1080 / 3 }
            />
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
            <ul>
                { players.map(player =>
                    <li key={ player._id.toString() }>
                        <Link href={ "players/" + player._id }>
                            <a>Name: { player.name }</a>
                        </Link>
                        <br/>
                        Score: { player.total }
                        <br/>
                        Games: {
                        games.filter(game => player.games.includes(game._id))
                            .map(game => dayjs(game.date).format("MMM D, YYYY"))
                            .join(", ")
                    }
                    </li>
                ) }
            </ul>
        </Layout>
    );
}

export async function getServerSideProps() {
    try {
        await connectToDatabase()

        const players = await collections.players.find({}).toArray() as Player[]
        const games = await collections.games.find({}).toArray() as Game[]

        return {
            props: {
                error: !players || !games,
                players: jsonify(players),
                games: jsonify(games)
            }
        }
    } catch (e) {
        console.error(e)
        return { props: { error: true } }
    }
}

export default index