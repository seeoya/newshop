import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <div className="wrap">{children}</div>
            <SideButton />
            <Footer />
        </>
    );
}

function SideButton() {
    return (
        <div>
            <button>다크모드 버튼</button>
            <button>맨위로 버튼</button>
        </div>
    );
}
