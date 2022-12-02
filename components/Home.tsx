export default function Home() {
    return (
        <div>
            <div className="bg-amber-400">가나다</div>
            메인페이지
            <FullBanner />
            <SlideBanner />
            <ImageBanner />
        </div>
    );
}

function FullBanner() {
    return <div>풀배너</div>;
}

function SlideBanner() {
    return <div>슬라이드배너</div>;
}
function ImageBanner() {
    return <div>이미지 배너</div>;
}
