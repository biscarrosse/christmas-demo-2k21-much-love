import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
                        rel="stylesheet"
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik:wght@300;400&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>

                <body>
                    {/* e.g. for modals with react portal <div id='overlays'></div> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
