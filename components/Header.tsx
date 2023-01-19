import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    const pageId = router.asPath;

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <NavItem pageId={pageId} href="/" title="HOME" />
                    <NavItem pageId={pageId} href="/list" title="LIST" />
                    <NavItem pageId={pageId} href="/item/1" title="ITEM" />
                    <NavItem pageId={pageId} href="/img" title="IMG" />
                    <NavItem pageId={pageId} href="/tailwind" title="TAILWIND" />
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <Link href={"/member/login"} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}

function NavItem(param: any) {
    let { pageId, href, title } = param;

    let bold = "";

    if (pageId.split("/")[1] == href.split("/")[1]) {
        bold = " font-bold";
    }

    return (
        <Link href={href} className={"mr-5 hover:text-gray-900" + bold}>
            {title}
        </Link>
    );
}
