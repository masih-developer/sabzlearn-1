import { Link } from "react-router-dom";
import { FaAngleDown, FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import ModalWrapper from "../ModalWrapper";
import { SidebarContext } from "../../../context/SidebarProvider";
import { useContext } from "react";

const Navbar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext);

    return (
        <nav className="fixed left-0 right-0 top-0 z-10 flex w-full items-center justify-between bg-white p-3 shadow-xl lg:static lg:p-5 lg:shadow-sm">
            <button
                className="flex items-center justify-center rounded-md bg-primary-color p-2.5 text-white lg:hidden"
                onClick={() => setIsOpenSidebar((prev) => !prev)}
            >
                <FaBars />
            </button>
            <div className="flex items-center justify-center gap-3">
                <img
                    src="/images/logo/Logo.png"
                    alt="sabzlearn-logo"
                    className="block w-[70px] lg:w-[100px]"
                />
                <ul className="hidden items-center justify-center gap-4 lg:flex">
                    <li className="group/icon relative">
                        <Link className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color">
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className="group/icon group/megamenu relative py-3">
                        <Link className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color">
                            فرانت اند
                            <FaAngleDown className="duration-300 group-hover/icon:rotate-180" />
                        </Link>
                        <ul className="invisible absolute right-0 top-14 z-10 w-60 rounded-lg border-b-2 border-solid border-b-primary-color bg-white p-5 opacity-0 shadow-lg duration-300 group-hover/megamenu:visible group-hover/megamenu:top-12 group-hover/megamenu:opacity-100">
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش Html
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش Css
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش جاوااسکریپت
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش flex-box
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش جامع ری اکت
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="group/icon group/megamenu relative py-3">
                        <Link className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color">
                            امنیت
                            <FaAngleDown className="duration-300 group-hover/icon:rotate-180" />
                        </Link>
                        <ul className="invisible absolute right-0 top-14 z-10 w-60 rounded-lg border-b-2 border-solid border-b-primary-color bg-white p-5 opacity-0 shadow-lg duration-300 group-hover/megamenu:visible group-hover/megamenu:top-12 group-hover/megamenu:opacity-100">
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش کالی لینوکس
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش پایتون سیاه
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش جاوااسکریپت سیاه
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    آموزش شبکه
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="group/icon group/megamenu relative py-3">
                        <Link className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color">
                            مقالات
                            <FaAngleDown className="duration-300 group-hover/icon:rotate-180" />
                        </Link>
                        <ul className="invisible absolute right-0 top-14 z-10 w-60 rounded-lg border-b-2 border-solid border-b-primary-color bg-white p-5 opacity-0 shadow-lg duration-300 group-hover/megamenu:visible group-hover/megamenu:top-12 group-hover/megamenu:opacity-100">
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    توسعه وب
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    جاوااسکریپت
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    فرانت اند
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="group/icon group/megamenu relative py-3">
                        <Link className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color">
                            پایتون
                            <FaAngleDown className="duration-300 group-hover/icon:rotate-180" />
                        </Link>
                        <ul className="invisible absolute right-0 top-14 z-10 w-60 rounded-lg border-b-2 border-solid border-b-primary-color bg-white p-5 opacity-0 shadow-lg duration-300 group-hover/megamenu:visible group-hover/megamenu:top-12 group-hover/megamenu:opacity-100">
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    دوره متخصص پایتون
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    دوره هوش مصنوعی با پایتون
                                </Link>
                            </li>
                            <li className="w-100 block">
                                <Link className="block py-2 text-md text-dark-color duration-300 hover:text-blue-hover">
                                    دوره متخصص جنگو
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="group/icon relative">
                        <Link className="flex items-center justify-center gap-1 text-[#7f8187] transition-colors hover:text-dark-color">
                            مهارت های نرم
                        </Link>
                    </li>
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
                <button className="hidden items-center justify-center rounded-md border-2 border-primary-color p-2 text-primary-color duration-300 hover:bg-primary-color hover:text-white lg:flex">
                    محمد امین سعیدی راد
                </button>
            </div>
            <ModalWrapper isShow={isOpenSidebar} onClose={() => setIsOpenSidebar(false)} />
        </nav>
    );
};

export default Navbar;
