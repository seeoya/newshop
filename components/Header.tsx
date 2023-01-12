import Link from "next/link";

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link href="/" className="mr-5 hover:text-gray-900">
                        HOME
                    </Link>
                    <Link href="/list" className="mr-5 hover:text-gray-900">
                        LIST
                    </Link>
                    <Link href="/item/item1" className="mr-5 hover:text-gray-900">
                        ITEM
                    </Link>
                    <Link href="/img" className="mr-5 hover:text-gray-900">
                        IMG
                    </Link>
                    <Link href="/tailwind" className="hover:text-gray-900">
                        TAILWIND
                    </Link>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <Link href={""} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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

function Nav() {
    return (
        <nav>
            네비게이션
            <NavItem />
        </nav>
    );
}

function NavItem() {
    return <div>네비아이템</div>;
}
