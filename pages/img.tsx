import Image from "next/image";

export default function ImagePage() {
    let imgList: string[] = [];

    for (let i = 1; i < 20; i++) {
        imgList.push(`/imgT/t(${i}).jpg`);
    }

    return (
        <div className="flex flex-wrap">
            {imgList.map((item) => {
                return <Image src={item} width={999999} height={99999999} alt="" className="w-[600px] object-cover" />;
            })}
        </div>
    );
}
