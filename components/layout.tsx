import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.sass';

export const siteTitle = 'Poker Club'

export default function Layout({ children, home }) {
    return (
        <div className={ styles.container }>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="A website to display Poker Club scores"/>
                <meta
                    property="og:image"
                    content={ `https://og-image.vercel.app/${ encodeURI(
                        siteTitle
                    ) }.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg` }
                />
                <meta property="og:title" content={ siteTitle }/>
            </Head>
            <main>{ children }</main>
            { !home &&
                <div className={ styles.backToHome }>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            }
        </div>
    )
}