import Head from 'next/head';
import Layout, { siteTitle } from "../_layout";
import styles from "../../styles/utils.module.sass";
import { collections, connectToDatabase } from "../../services/database.service";
import { jsonify } from "../../lib/util";
import Game from "../../models/game";
import { Alert, ListGroup } from "react-bootstrap";
import Link from "next/link";
import dayjs from "dayjs";

type Props = {
    error: boolean
    games: Game[]
}

const games = ({error, games}: Props) => {
    return (
        <Layout>
            <Head>
                <title>{ siteTitle + " - GAMES" }</title>
            </Head>
            <h1 className={ styles.headingLg }>Games</h1>
            <h2 className={ styles.headingMd }>This is the games page</h2>
            { error ?
                <Alert variant="danger">There was an error loading the games!</Alert> :
                <ListGroup variant="flush">{
                    games.map(game => (
                        <Link href={ "/games/" + game._id }>
                            <ListGroup.Item key={ game._id.toString() } action as="a">
                                { dayjs(game.date).format("MMM D, YYYY") }
                            </ListGroup.Item>
                        </Link>
                    ))
                }</ListGroup>
            }
        </Layout>
    )
}

export default games

export async function getServerSideProps() {
    try {
        await connectToDatabase()

        const games = await collections.games.find({}).toArray() as Game[]

        return {
            props: {
                error: !games,
                games: jsonify(games),
            }
        }
    } catch (e) {
        console.error(e)
        return { props: { error: true } }
    }
}