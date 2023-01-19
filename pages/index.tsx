import { NextSeo, DefaultSeo } from "next-seo";
import Home from "../components/Home";

export default function Index() {
    return (
        <>
            <NextSeo
                title="여긴 각 인덱스 SEO"
                description="This example uses more of the available config options."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: "https://www.url.ie/a",
                    title: "Open Graph Title",
                    description: "Open Graph Description",
                    images: [
                        {
                            url: "https://www.example.ie/og-image-01.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg"
                        },
                        {
                            url: "https://www.example.ie/og-image-02.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                            type: "image/jpeg"
                        },
                        { url: "https://www.example.ie/og-image-03.jpg" },
                        { url: "https://www.example.ie/og-image-04.jpg" }
                    ],
                    siteName: "SiteName"
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image"
                }}
            />
            <Home />
        </>
    );
}
