import { useEffect, useState } from "react";
import DataTable from "../../components/AdminPanel/DataTable";
import Button from "../../components/common/Button";
import { toast } from "react-hot-toast";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch("http://localhost:4000/v1/users", {
            headers: { Authorization: `Bearer ${localStorageData.token}` },
        })
            .then((res) => res.json())
            .then((result) => {
                setUsers(result);
            });
    }, []);

    const removeUserHandler = (userInfo) => {
        toast(
            () => (
                <div className="flex flex-col gap-2">
                    <span>
                        آیا از حذف این <span className="font-IRANSans-Bold">کاربر </span>مطمئن
                        هستید؟
                    </span>
                    <div className="flex w-full items-center justify-center gap-3">
                        <button
                            className="flex items-center justify-center rounded-md border-2 border-red-500 px-5 py-1 text-red-500"
                            onClick={() => {
                                toast.dismiss();
                                removeHandler();
                            }}
                        >
                            بله
                        </button>
                        <button
                            className="rounded-md border-2 border-blue-500 bg-blue-500 px-5 py-1 text-white"
                            onClick={() => toast.dismiss()}
                        >
                            خیر
                        </button>
                    </div>
                </div>
            ),
            { duration: 5000 }
        );

        const removeHandler = () => {
            const toastId = toast.loading("درحال حذف کاربر...");
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            fetch(`http://localhost:4000/v1/users/${userInfo._id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${localStorageData.token}` },
                body: JSON.stringify(userInfo),
            })
                .then(async (res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error(res);
                })
                .then((result) => {
                    console.log(result);
                    toast.success("حذف کاربر با موفقیت انجام شد.", {
                        id: toastId,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("حذف کاربر با خطا مواجه شد.", {
                        id: toastId,
                    });
                });
        };
    };

    return (
        <div>
            <DataTable title="کاربران">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-50 py-3">
                            <th className="py-2 text-md">شناسه</th>
                            <th className="py-2 text-md">نام و نام خانوادگی</th>
                            <th className="py-2 text-md">شماره</th>
                            <th className="py-2 text-md">ایمیل</th>
                            <th className="py-2 text-md">ویرایش</th>
                            <th className="py-2 text-md">حذف</th>
                            <th className="py-2 text-md">اخراج</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th className="py-3 text-sm">{index + 1}</th>
                                <th className="py-3 text-sm">{user.name}</th>
                                <th className="py-3 text-sm">{user.phone}</th>
                                <th className="py-3 text-sm">{user.email}</th>
                                <th className="py-3 text-sm">
                                    <Button className="rounded-md bg-blue-500 px-3 py-2 font-IRANSans text-sm text-white">
                                        ویرایش
                                    </Button>
                                </th>
                                <th className="py-3 text-sm">
                                    <Button
                                        className="rounded-md bg-red-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => removeUserHandler(user)}
                                    >
                                        حذف
                                    </Button>
                                </th>
                                <th className="py-3 text-sm">
                                    <Button className="rounded-md bg-red-500 px-3 py-2 font-IRANSans text-sm text-white">
                                        اخراج
                                    </Button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DataTable>
        </div>
    );
};

export default Users;
