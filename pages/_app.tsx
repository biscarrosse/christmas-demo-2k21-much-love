// Next:
import type { AppProps } from 'next/app'
import Head from 'next/head'
// Redux:
import { Provider } from 'react-redux'
import store from '../modules/redux/store'
// Styled:
import { GlobalStyle } from '../common/style/global.style'

type ComponentWithPageLayout = AppProps & {
    Component: AppProps['Component'] & {
        PageLayout?: React.ComponentType
    }
}
function App({ Component, pageProps }: ComponentWithPageLayout) {
    return (
        <Provider store={store}>
            <GlobalStyle />
            {Component.PageLayout ? (
                <Component.PageLayout>
                    <Head>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <Component {...pageProps} />
                </Component.PageLayout>
            ) : (
                <>
                    <Head>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <Component {...pageProps} />
                </>
            )}
        </Provider>
    )
}

export default App
