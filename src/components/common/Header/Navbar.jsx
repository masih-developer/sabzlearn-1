import { Link } from "react-router-dom";
import { FaAngleDown, FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import ModalWrapper from "../ModalWrapper";
import { SidebarContext } from "../../../context/SidebarProvider";
import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext);
    const authContext = useContext(AuthContext);
    const [allMenuItems, setAllMenuItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/menus")
            .then((res) => res.json())
            .then((result) => {
                setAllMenuItems(result);
            });
    }, []);

    return (
        <nav className="fixed left-0 right-0 top-0 z-[100] flex w-full items-center justify-between bg-white p-3 shadow-xl lg:static lg:p-5 lg:shadow-sm">
            <button
                className="flex items-center justify-center rounded-md bg-primary-color p-2.5 text-white lg:hidden"
                onClick={() => setIsOpenSidebar((prev) => !prev)}
            >
                <FaBars />
            </button>
            <div className="flex items-center justify-center gap-3">
                <Button to="/">
                    <img
                        src="/images/logo/Logo.png"
                        alt="sabzlearn-logo"
                        className="block w-[70px] lg:w-[100px]"
                    />
                </Button>
                <ul className="hidden flex-wrap items-center justify-start gap-x-4 lg:flex">
                    <li className="group/icon relative">
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color"
                        >
                            صفحه اصلی
                        </Link>
                    </li>
                    {allMenuItems.map((item) => (
                        <li className="group/icon group/megamenu relative py-3" key={item._id}>
                            <Link
                                to={`${item.href}/1`}
                                className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color"
                            >
                                {item.title}
                                {item.submenus.length ? (
                                    <FaAngleDown className="duration-300 group-hover/icon:rotate-180" />
                                ) : null}
                            </Link>
                            {item.submenus.length ? (
                                <ul className="invisible absolute right-0 top-14 z-10 w-60 rounded-lg border-b-2 border-solid border-b-primary-color bg-white p-5 opacity-0 shadow-lg duration-300 group-hover/megamenu:visible group-hover/megamenu:top-12 group-hover/megamenu:opacity-100">
                                    {item.submenus.map((submenu) => (
                                        <li className="w-100 block" key={submenu._id}>
                                            <Link
                                                to={submenu.href}
                                                className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover"
                                            >
                                                {submenu.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className="hidden items-center justify-center rounded-md bg-primary-color p-2.5 text-white lg:flex lg:p-3 lg:text-lg">
                    <FaSearch />
                </button>
                <button className="flex items-center justify-center rounded-md bg-primary-color p-2.5 text-md text-white lg:hidden">
                    <FaUser />
                </button>
                <button className="lg flex items-center justify-center rounded-md bg-grey-color p-2.5 text-md text-dark-color lg:p-3 lg:text-lg">
                    <FaShoppingCart />
                </button>
                <Button
                    to={authContext.isLoggedIn ? "/" : "/register"}
                    className="hidden shrink-0 items-center justify-center rounded-md border-2 border-primary-color p-2 text-primary-color duration-300 hover:bg-primary-color hover:text-white lg:flex"
                >
                    {authContext.isLoggedIn ? authContext.userInfos.name : "ورود / ثبت نام"}
                </Button>
            </div>
            <ModalWrapper isShow={isOpenSidebar} onClose={() => setIsOpenSidebar(false)} />
        </nav>
    );
};

export default Navbar;
