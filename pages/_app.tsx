import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Header from '../components/common/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
            />
            <Header />
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
