import Head from 'next/head';
import Layout, { siteTitle } from "./_layout";
import styles from "../styles/utils.module.sass";

const login = () => {
    return (
        <Layout home={ false }>
            <Head>
                <title>{ siteTitle + " - LOGIN" }</title>
            </Head>
            <h1 className={ styles.headingLg }>Log in</h1>
            <h2 className={ styles.headingMd }>Coming soon</h2>
        </Layout>
    )
}

export default login