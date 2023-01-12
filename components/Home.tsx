import Category from "./Category";
import ImageGallery from "./ImageGallery";
import MainItem from "./MainItem";
import Preview from "./Prewview";
import SlideBanner from "./SlideBanner";

export default function Home() {
    return (
        <div>
            <SlideBanner />
            <MainItem />
            <Preview />
            <Category />
            <FullBanner />
            <ImageBanner />
        </div>
    );
}

function FullBanner() {
    return <div className="bg-red-100">풀배너</div>;
}

function ImageBanner() {
    return <div className="bg-green-100">이미지 배너</div>;
}
