import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/utils.module.sass";

export default function about() {
    return (
        <Layout home={ false }>
            <Head>
                <title>{ siteTitle + " - ABOUT" }</title>
            </Head>
            <h1 className={ styles.headingLg }>About</h1>
            <h2 className={ styles.headingMd }>This is the about page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </Layout>
    );
}