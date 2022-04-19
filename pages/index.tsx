import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from "../components/layout";
import clientPromise from "../lib/mongodb";

export default function Home({ players }) {
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
                    <li key={ player.id }>
                        Name: { player.name }
                        <br />
                        Score: { player.score }
                    </li>
                ) }
            </ul>
        </Layout>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise

        const players = await client.db("players").collection("players").find({}).toArray()

        return {
            props: { players: JSON.parse(JSON.stringify(players)) },
        }
    } catch (e) {
        console.error(e)
    }
}