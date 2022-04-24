import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from "../components/layout";
import clientPromise from "../lib/mongodb";
import dayjs from "dayjs";

export default function Home({ players, games }) {
    return (
        <Layout home>
            <Head>
                <title>{ siteTitle + " - SCORES" }</title>
            </Head>
            <Image
                src="/images/banner.jpeg"
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
                    <li key={ player._id }>
                        <Link href={ "player/" + player._id }>
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
        const client = await clientPromise

        const db = await client.db("poker")

        const players = await db.collection("all-players").find({}).toArray()
        const games = await db.collection("all-games").find({}).toArray()

        return {
            props: { players: JSON.parse(JSON.stringify(players)), games: JSON.parse(JSON.stringify(games)) }
        }
    } catch (e) {
        console.error(e)
    }
}