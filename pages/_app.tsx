import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../store/store";

import "../styles/globals.css";

import Layout from "../components/Layout";
import { DefaultSeo, NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <Provider store={store}>
            <Layout>
                <DefaultSeo
                    title="abcde"
                    openGraph={{
                        type: "website",
                        locale: "en_IE",
                        url: "https://www.url.ie/",
                        siteName: "SiteName"
                    }}
                    twitter={{
                        handle: "@handle",
                        site: "@site",
                        cardType: "summary_large_image"
                    }}
                />

                <NextSeo title={router.asPath} />

                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
