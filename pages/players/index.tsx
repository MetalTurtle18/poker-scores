import Head from 'next/head';
import Layout, { siteTitle } from "../_layout";
import styles from "../../styles/utils.module.sass";

const players = () => {
    return (
        <Layout>
            <Head>
                <title>{ siteTitle + " - PLAYERS" }</title>
            </Head>
            <h1 className={ styles.headingLg }>Players</h1>
            <h2 className={ styles.headingMd }>This is the players page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </Layout>
    )
}

export default players