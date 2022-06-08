import Head from 'next/head';
import Layout, { siteTitle } from "../_layout";
import styles from "../../styles/utils.module.sass";
import { collections, connectToDatabase } from "../../services/database.service";
import Player from "../../models/player";
import { jsonify } from "../../lib/util";
import { Alert, ListGroup } from "react-bootstrap";
import Link from "next/link";

type Props = {
    error: boolean
    players: Player[]
}

const players = ({ error, players }: Props) => {
    return (
        <Layout>
            <Head>
                <title>{ siteTitle + " - PLAYERS" }</title>
            </Head>
            <h1 className={ styles.headingLg }>Players</h1>
            <h2 className={ styles.headingMd }>This is the players page</h2>
            { error ?
                <Alert variant="danger">There was an error loading the players!</Alert> :
                <ListGroup variant="flush">{
                    players.map(player => (
                        <Link href={ "/players/" + player._id }>
                            <ListGroup.Item key={ player._id.toString() } action as="a">
                                { player.name }
                            </ListGroup.Item>
                        </Link>
                    ))
                }</ListGroup>
            }
        </Layout>
    )
}

export default players

export async function getServerSideProps() {
    try {
        await connectToDatabase()

        const players = await collections.players.find({}).toArray() as Player[]

        return {
            props: {
                error: !players,
                players: jsonify(players),
            }
        }
    } catch (e) {
        console.error(e)
        return { props: { error: true } }
    }
}