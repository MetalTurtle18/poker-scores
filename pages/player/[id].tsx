import { useRouter } from "next/router";
import Layout from "../../components/layout";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "bson";

export default function player({ error, player }) {
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
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    try {
        const id = new ObjectId(ctx.query.id)

        const client = await clientPromise
        const player = await client.db("poker").collection("all-players").findOne({ _id: id })

        return {
            props: { error: !player, player: JSON.parse(JSON.stringify(player)) }
        }
    } catch (e) {
        console.error(e)
        return {
            props: { error: true, player: null }
        }
    }
}