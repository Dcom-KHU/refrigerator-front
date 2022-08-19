import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <script
                        defer
                        type="text/javascript"
                        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
                        charSet="utf-8"
                    ></script>
                    <NextScript />
                </body>
            </Html>
        );
    }
}
