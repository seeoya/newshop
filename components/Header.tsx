export default function Header() {
    return (
        <header>
            헤더
            <Nav />
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
