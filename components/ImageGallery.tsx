import Image from "next/image";

export default function ImageGallery() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&#39t heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2 relative">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image alt="gallery" layout="fill" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image alt="gallery" layout="fill" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image alt="gallery" layout="fill" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2 ">
                        <div className="md:p-2 p-1 w-full relative">
                            <Image alt="gallery" layout="responsive" width={300} height={300} className="object-cover object-center block" src="https://dummyimage.com/601x361" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                        </div>
                    </div>
                </div>
                <Image alt="gallery" layout="raw" width={15000} height={400} className="object-cover object-center" src="https://dummyimage.com/503x303" />
            </div>
        </section>
    );
}
