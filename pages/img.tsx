import Head from "next/head";
import Image from "next/image";

export default function ImagePage() {
    let imgList: string[] = [];

    for (let i = 1; i < 20; i++) {
        imgList.push(`/imgT/t(${i}).jpg`);
    }

    return (
        <>
            <Head>
                <title>이미지이이이</title>
                <meta name="description" content="abcdefg img" />
            </Head>

            <div className="flex flex-wrap">
                {imgList.map((item, index) => {
                    return (
                        <span key={index} className="relative w-[100px] h-[300px]">
                            <Image key={index} src={item} layout="fill" quality={100} alt="" className="object-cover" />
                        </span>
                    );
                })}
            </div>
        </>
    );
}
