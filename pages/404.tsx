import Link from "next/link";
import { Container, Row } from "react-bootstrap";

const notFound = () => {
    return (
        <Container className="d-flex justify-content-center flex-nowrap">
            <Row>
                <h1>404: Page not found!</h1>
            </Row>
            <Row>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </Row>
        </Container>
    )
}

export default notFound