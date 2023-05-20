import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarProvider";

const NavbarMobile = () => {
    const { isOpenSidebar } = useContext(SidebarContext);
    return (
        <div
            className={`fixed bottom-0 ${
                isOpenSidebar ? "right-0" : "right-[-250px]"
            } top-0 z-[3000] block w-[250px]  bg-red-500 duration-300 lg:hidden`}
        >
            <ul>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
            </ul>
        </div>
    );
};

export default NavbarMobile;
