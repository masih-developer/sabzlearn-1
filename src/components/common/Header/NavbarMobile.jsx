import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SidebarContext } from "../../../context/SidebarProvider";

const NavbarMobile = () => {
    const [listItems, setListItems] = useState([
        {
            title: "فرانت اند",
            items: [
                { title: "آموزش Html", path: "/" },
                { title: "آموزش Css", path: "/" },
                { title: "آموزش FlexBox", path: "/" },
                { title: "آموزش Css Grid", path: "/" },
                { title: "آموزش Emmet", path: "/" },
                { title: "آموزش اصولی طراحی قالب", path: "/" },
                { title: "آموزش جاوا اسکریپت", path: "/" },
                { title: "آموزش بوت استرپ", path: "/" },
                { title: "آموزش جامع ری اکت", path: "/" },
                { title: "آموزش جامع Vue Js", path: "/" },
                { title: "آموزش Vscode", path: "/" },
                { title: "آموزش Npm", path: "/" },
            ],
            isActive: false,
        },
        {
            title: "امنیت",
            items: [
                { title: "نقشه راه ورود به دنیای امنیت", path: "/" },
                { title: "شبکه با گرایش امنیت", path: "/" },
                { title: "لینوکس با گرایش امنیت", path: "/" },
                { title: "آموزش هکر قانونمند - CEH V11", path: "/" },
                { title: "آموزش کالی لینوکس", path: "/" },
                { title: "آموزش پایتون سیاه", path: "/" },
                { title: "آموزش Burp Suite", path: "/" },
                { title: "آموزش جاوا اسکریپت سیاه", path: "/" },
            ],
            isActive: false,
        },
        {
            title: "پایتون",
            items: [
                { title: "دوره آموزش پایتون", path: "/" },
                { title: "پروژه های کاربردی با پایتون", path: "/" },
                { title: "ترفند های کاربردی با پایتون", path: "/" },
                { title: "متخصص جنگو", path: "/" },
                { title: "مصور سازی داده با پایتون", path: "/" },
            ],
            isActive: false,
        },
        {
            title: "مهارت های نرم",
            isActive: false,
        },
        {
            title: "مقالات",
            items: [
                { title: "اچ تی ام ال", path: "/" },
                { title: "بوت استرپ", path: "/" },
                { title: "پروژه های برنامه نویسی", path: "/" },
                { title: "تست نفوذ و امنیت وب", path: "/" },
                { title: "جی کوئری", path: "/" },
                { title: "ری اکت جی اس", path: "/" },
                { title: "سی اس اس", path: "/" },
                { title: "شروع برنامه نویسی", path: "/" },
                { title: "طراحی سایت", path: "/" },
                { title: "ویو جی اس", path: "/" },
            ],
            isActive: false,
        },
    ]);
    const [mainItem, setMainItem] = useState(null);
    const { isOpenSidebar } = useContext(SidebarContext);
    return (
        <div
            className={`fixed bottom-0 ${
                isOpenSidebar ? "right-0" : "right-[-250px]"
            } top-0 z-[3000] block min-h-screen w-[250px] overflow-y-scroll bg-gray-50 duration-300 lg:hidden`}
        >
            <ul className="mt-10">
                {listItems.map((accItem, index) => (
                    <li className="" key={index}>
                        <div
                            className="accordion-item-btn blcok flex w-full cursor-pointer select-none items-center justify-between border-b-2 border-b-gray-200 bg-gray-50 px-2 py-3 text-right text-dark-color hover:bg-gray-100"
                            onClick={(e) => {
                                if (e.target.tagName === "DIV") {
                                    setListItems((prevState) =>
                                        prevState.map((item, i) =>
                                            i === index
                                                ? { ...item, isActive: !item.isActive }
                                                : { ...item, isActive: false }
                                        )
                                    );
                                    setMainItem(e.target.parentElement.children[1]);
                                }
                            }}
                        >
                            <a href="#" className="text-dark-color">
                                {accItem.title}
                            </a>
                            {accItem.items && (
                                <FaAngleDown
                                    className={`text-dark-color duration-300 ${
                                        accItem.isActive ? "rotate-180" : ""
                                    }`}
                                />
                            )}
                        </div>
                        {accItem.items && (
                            <ul
                                className={`bg-gray-200 duration-300 ${
                                    accItem.isActive
                                        ? `h-[${mainItem.scrollHeight}px] overflow-visible`
                                        : "h-0 overflow-hidden"
                                }`}
                            >
                                {accItem.items.map((linkItems, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="block p-2 text-dark-color duration-300 hover:text-blue-hover"
                                        >
                                            {linkItems.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavbarMobile;
