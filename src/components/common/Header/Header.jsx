import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import TopBar from "./TopBar";

const Header = () => {
    return (
        <header>
            <TopBar />
            <Navbar />
            <NavbarMobile />
        </header>
    );
};

export default Header;
