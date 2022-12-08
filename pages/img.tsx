import Image from "next/image";

export default function ImagePage() {
    let imgList: string[] = [];

    for (let i = 1; i < 20; i++) {
        imgList.push(`/imgT/t(${i}).jpg`);
    }

    return (
        <div className="flex flex-wrap">
            {imgList.map((item, index) => {
                return (
                <span className="relative w-[100px] h-[300px]">
                
                <Image key={index} src={item} layout="fill" quality={100} alt="" className="object-cover" />
                </span>);
            })}
        </div>
    );
}
