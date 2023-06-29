import { Outlet } from "react-router-dom";
import Sidebar from "../../components/AdminPanel/Sidebar";
import Topbar from "../../components/AdminPanel/Topbar";

const index = () => {
    return (
        <div className="relative flex">
            <Sidebar />
            <div className="mr-auto w-full lg:w-[calc(100%-250px)]">
                <Topbar />
                <div className="container mt-[84px] min-h-screen">{<Outlet />}</div>
            </div>
        </div>
    );
};

export default index;
