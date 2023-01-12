import Category from "./Category";
import ImageGallery from "./ImageGallery";
import MainItem from "./MainItem";
import Preview from "./Prewview";

export default function Home() {
    return (
        <div>
            <MainItem />
            <Preview />
            <Category />
            <FullBanner />
            <SlideBanner />
            <ImageBanner />
        </div>
    );
}

function FullBanner() {
    return <div className="bg-red-100">풀배너</div>;
}

function SlideBanner() {
    return <div className="bg-blue-100">슬라이드배너</div>;
}
function ImageBanner() {
    return <div className="bg-green-100">이미지 배너</div>;
}
