import '../styles/global.sass';
import { AppProps } from "next/app";

const app = ({ Component, pageProps }: AppProps) => {
    return <Component { ...pageProps } />
}

export default app