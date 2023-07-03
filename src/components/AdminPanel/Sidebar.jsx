import { useContext } from "react";
import { Sidebar as ReactProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Sidebar = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        authContext.logout();
        toast.success("با موفقیت از حساب خود خارج شدید.");
        navigate("/");
    };

    return (
        <div className="fixed bottom-0 right-0 top-0 h-screen">
            <ReactProSidebar
                backgroundColor="#0c0e1f"
                rtl={true}
                collapsedWidth="0"
                breakPoint="lg"
                className="h-full"
            >
                <div className="flex h-16 w-full items-center border-b border-b-[#6d6f80]">
                    <Link to="/" className="block w-20">
                        <img
                            src="/images/logo/Logo.png"
                            alt=""
                            className="block w-full object-contain"
                        />
                    </Link>
                </div>
                <Menu
                    menuItemStyles={{
                        button: {
                            color: "#6d6f80",
                            transition: ".3s",
                            [`&:hover`]: {
                                color: "#ffffff",
                                backgroundColor: "#0c0e1f",
                            },
                            [`&.active`]: {
                                borderLeft: "5px solid #233dff",
                                backgroundImage:
                                    "linear-gradient(to right,rgba(255,255,255,0.2),rgba(255,255,255,0))",
                                color: "white",
                            },
                        },
                    }}
                >
                    {[
                        { id: 1, name: "صفحه اصلی", path: "/p-admin/" },
                        { id: 2, name: "دوره ها", path: "courses" },
                        { id: 3, name: "جلسات", path: "sessions" },
                        { id: 4, name: "منو ها", path: "menus" },
                        { id: 5, name: "مقاله ها", path: "articles" },
                        { id: 6, name: "کاربران", path: "users" },
                        { id: 7, name: "کد های تخفیف", path: "discount-codes" },
                        { id: 8, name: "دسته بندی ها", path: "categories" },
                        { id: 9, name: "ارتباط با ما", path: "contacts" },
                    ].map((item) => (
                        <MenuItem key={item.id} component={<NavLink to={item.path} />}>
                            {item.name}
                        </MenuItem>
                    ))}
                    <MenuItem onClick={logoutHandler}>خروج</MenuItem>
                </Menu>
            </ReactProSidebar>
        </div>
    );
};

export default Sidebar;
