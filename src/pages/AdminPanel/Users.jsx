import { useEffect, useState } from "react";
import DataTable from "../../components/AdminPanel/DataTable";
import Button from "../../components/common/Button";
import { toast } from "react-hot-toast";
import AppInput from "../../components/common/AppInput";
import useForm from "../../hooks/useForm";
import {
    emailValidator,
    maxValidator,
    minValidator,
    phoneNumberValidator,
    requiredValidator,
} from "../../validators/rules";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [formState, onInputHandler] = useForm(
        {
            name: { valu: "", isValid: false },
            username: { value: "", isValid: false },
            email: { value: "", isValid: false },
            password: { value: "", isValid: false },
            phone: { value: "", isValid: false },
        },
        false
    );

    const fetchUsersHandler = () => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch("http://localhost:4000/v1/users", {
            headers: { Authorization: `Bearer ${localStorageData.token}` },
        })
            .then((res) => res.json())
            .then((result) => {
                setUsers(result);
            });
    };

    useEffect(() => {
        fetchUsersHandler();
    }, []);

    const removeUserHandler = (userInfo) => {
        toast(
            () => (
                <div className="flex flex-col gap-2">
                    <span>
                        آیا از <span className="font-IRANSans-Bold text-black">حذف</span> این کاربر
                        مطمئن هستید؟
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
                    fetchUsersHandler();
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("حذف کاربر با خطا مواجه شد.", {
                        id: toastId,
                    });
                });
        };
    };

    const banUserHandler = (userInfo) => {
        toast(
            () => (
                <div className="flex flex-col gap-2">
                    <span>
                        آیا از <span className="font-IRANSans-Bold text-black">اخراج</span> این
                        کاربر مطمئن هستید؟
                    </span>
                    <div className="flex w-full items-center justify-center gap-3">
                        <button
                            className="flex items-center justify-center rounded-md border-2 border-red-500 px-5 py-1 text-red-500"
                            onClick={() => {
                                toast.dismiss();
                                banHandler();
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

        const banHandler = () => {
            const toastId = toast.loading("درحال اخراج کاربر...");
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            fetch(`http://localhost:4000/v1/users/ban/${userInfo._id}`, {
                method: "PUT",
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
                    toast.success("اخراج کاربر با موفقیت انجام شد.", {
                        id: toastId,
                    });
                    fetchUsersHandler();
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("انجام عملیات با خطا مواجه شد.", {
                        id: toastId,
                    });
                });
        };
    };

    const submitUserHandler = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <div className="pb-5">
            <div className="mb-5 rounded-lg p-5 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.1)]">
                <form action="#" onSubmit={(e) => submitUserHandler(e)}>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="font-IRANSans-Bold">
                                نام و نام خانوادگی
                            </label>
                            <AppInput
                                elem="input"
                                id="name"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا نام و نام خانوادگی کاربر را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(20),
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="font-IRANSans-Bold">
                                نام کاربری
                            </label>
                            <AppInput
                                elem="input"
                                id="username"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا نام کاربری را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(20),
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-IRANSans-Bold">
                                ایمیل
                            </label>
                            <AppInput
                                elem="input"
                                id="email"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا ایمیل کاربر را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[emailValidator()]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-IRANSans-Bold">
                                رمز عبور
                            </label>
                            <AppInput
                                elem="input"
                                id="password"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا رمز عبور کاربر را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(20),
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="font-IRANSans-Bold">
                                شماره تلفن
                            </label>
                            <AppInput
                                elem="input"
                                id="phone"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا شماره تلفن کاربر را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[phoneNumberValidator()]}
                            />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="mt-5 flex items-center justify-center rounded-md bg-blue-hover px-5 py-2 text-white disabled:opacity-70"
                        disabled={!formState.isFormValid}
                    >
                        افزودن
                    </Button>
                </form>
            </div>
            <DataTable title="کاربران" className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-50 py-3">
                            <th className="whitespace-nowrap p-2 text-md">شناسه</th>
                            <th className="whitespace-nowrap p-2 text-md">نام و نام خانوادگی</th>
                            <th className="whitespace-nowrap p-2 text-md">شماره</th>
                            <th className="whitespace-nowrap p-2 text-md">ایمیل</th>
                            <th className="whitespace-nowrap p-2 text-md">ویرایش</th>
                            <th className="whitespace-nowrap p-2 text-md">حذف</th>
                            <th className="whitespace-nowrap p-2 text-md">اخراج</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th className="whitespace-nowrap p-3 text-sm">{index + 1}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{user.name}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{user.phone}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{user.email}</th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button className="rounded-md bg-blue-500 px-3 py-2 font-IRANSans text-sm text-white">
                                        ویرایش
                                    </Button>
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-red-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => removeUserHandler(user)}
                                    >
                                        حذف
                                    </Button>
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md border border-red-500 bg-white px-3 py-2 font-IRANSans text-sm text-red-500"
                                        onclick={() => banUserHandler(user)}
                                    >
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
