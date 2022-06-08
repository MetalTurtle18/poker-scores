import Head from 'next/head'
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export const siteTitle = 'Poker Club'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <Container>
            <Head>
                <link rel="icon" href="/public/favicon.ico"/>
                <meta name="description" content="A website to display Poker Club scores"/>
                <meta
                    property="og:image"
                    content={ `https://og-image.vercel.app/${ encodeURI(
                        siteTitle
                    ) }.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg` }
                />
                <meta property="og:title" content={ siteTitle }/>
            </Head>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link href="/">
                        <Navbar.Brand as="a">
                            <img
                                src="public/favicon.ico"
                                height={ 30 }
                                alt="Poker Club logo"
                                className="d-inline-block align-top"
                            />{ ' ' }
                            Poker Club
                        </Navbar.Brand>
                    </Link>
                    <Nav className="me-auto">
                        <Link href="/">
                            <Nav.Link as="a">Home</Nav.Link>
                        </Link>
                        <Link href="/about">
                            <Nav.Link as="a">About</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link href="/rankings">
                            <Nav.Link as="a">Rankings</Nav.Link>
                        </Link>
                        <Link href="/players">
                            <Nav.Link as="a">Players</Nav.Link>
                        </Link>
                        <Link href="/games">
                            <Nav.Link as="a">Games</Nav.Link>
                        </Link>
                        <Link href="/admin-login">
                            <Nav.Link as="a">Admin Login</Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            <main>{ children }</main>
        </Container>
    )
}

export default layout