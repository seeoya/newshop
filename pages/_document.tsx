import { Head, Html, Main, NextScript } from "next/document";
import Router, { useRouter } from "next/router";

// _app.tsx > 본문 페이지 > _document.tsx 순서로 렌더링됨
export default function Document() {
    return (
        <Html>
            <Head>
                {/* <title>가나다라</title>
                <meta name="description" content="newshop desc" /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
