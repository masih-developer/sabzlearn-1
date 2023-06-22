import { useEffect, useState } from "react";
import Button from "../common/Button";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Topbar = () => {
    const [adminInfo, setAdminInfo] = useState({});
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch("http://localhost:4000/v1/auth/me", {
            headers: { Authorization: `Bearer ${localStorageData.token}` },
        })
            .then((res) => res.json())
            .then((result) => {
                setAdminInfo(result);
            });
    }, []);

    return (
        <div className="fixed left-0 top-0 mr-auto flex h-16 w-full items-center bg-white shadow-[0px_10px_10px_rgba(0,0,0,0.1)] lg:w-[calc(100%-250px)]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <input
                            type="text"
                            className="h-9 w-64 rounded-md bg-blue-100 p-2 text-md outline-0"
                            placeholder="جستجو..."
                        />
                        <Button className="text-2xl text-dark-color">
                            <MdOutlineNotificationsNone />
                        </Button>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Button>{adminInfo.name}</Button>
                        </div>
                        <img
                            src={`http://localhost:4000${adminInfo.profile}`}
                            alt=""
                            className="block h-12 w-12 rounded-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
