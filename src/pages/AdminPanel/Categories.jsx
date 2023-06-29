import { useEffect, useState } from "react";
import DataTable from "../../components/AdminPanel/DataTable";
import Button from "../../components/common/Button";
import useForm from "../../hooks/useForm";
import AppInput from "../../components/common/AppInput";
import {
    englishLettersValidator,
    maxValidator,
    minValidator,
    requiredValidator,
} from "../../validators/rules";
import { toast } from "react-hot-toast";
import ReactModal from "react-modal";

const Categories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [editNameValue, setEditNameValue] = useState("");
    const [editTitleValue, setEditTitleValue] = useState("");
    const [mainCategoryInfo, setMainCategoryInfo] = useState({});
    const [formState, onInputHandler] = useForm(
        {
            title: { value: "", isValid: false },
            name: { value: "", isValid: false },
        },
        false
    );

    const getAllCategoriesHandler = () => {
        fetch("http://localhost:4000/v1/category")
            .then((res) => res.json())
            .then((result) => {
                setAllCategories(result);
            });
    };

    useEffect(() => {
        getAllCategoriesHandler();
    }, []);

    const submitCategoryHandler = (e) => {
        e.preventDefault();
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        const newCategory = {
            name: formState.inputs.name.value,
            title: formState.inputs.title.value,
        };
        const toastID = toast.loading("درحال انجام عملیات...");
        fetch("http://localhost:4000/v1/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorageData.token}`,
            },
            body: JSON.stringify(newCategory),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res);
            })
            .then(() => {
                toast.success("دسته بندی جدید با موفقیت ثبت شد.", { id: toastID });
                getAllCategoriesHandler();
            })
            .catch((err) => {
                console.log(err);
                toast.error("انجام عملیات با خطا مواجه شد.", { id: toastID });
            });
    };

    const removeCategoryHandler = (category) => {
        toast(
            () => (
                <div className="flex flex-col gap-2">
                    <span>
                        آیا از <span className="font-IRANSans-Bold text-black">حذف</span> این دسته
                        بندی مطمئن هستید؟
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
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            const toastID = toast.loading("درحال انجام عملیات...");
            fetch(`http://localhost:4000/v1/category/${category._id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${localStorageData.token}` },
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error(res);
                })
                .then(() => {
                    toast.success("دسته بندی مورد نظر با موفقیت حذف شد.", { id: toastID });
                    getAllCategoriesHandler();
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    };

    const editCategoryHandler = (category) => {
        setMainCategoryInfo(category);
        setIsOpenModal(true);
        setEditTitleValue(category.title);
        setEditNameValue(category.name);
    };

    const editHandler = () => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        const newCategory = {
            name: editNameValue,
            title: editTitleValue,
        };

        const toastID = toast.loading("درحال انجام عملیات...");
        fetch(`http://localhost:4000/v1/category/${mainCategoryInfo._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorageData.token}`,
            },
            body: JSON.stringify(newCategory),
        })
            .then(async (res) => {
                if (res.ok) {
                    return res.json();
                }
                const errorText = await res.text();
                throw new Error(errorText);
            })
            .then((result) => {
                console.log(result);
                toast.success("تغییر دسته بندی با موفقیت انجام شد.", { id: toastID });
                getAllCategoriesHandler();
            })
            .catch((err) => {
                console.log(JSON.parse(err.message).message[0]);
                toast.error("انجام عملیات با خطا مواجه شد.", { id: toastID });
            })
            .finally(() => setIsOpenModal(false));
    };

    return (
        <div className="pb-5">
            <div className="mb-5 rounded-lg p-5 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.1)]">
                <form action="#" onSubmit={(e) => submitCategoryHandler(e)}>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title" className="font-IRANSans-Bold">
                                عنوان دسته بندی
                            </label>
                            <AppInput
                                elem="input"
                                id="title"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا عنوان دسته بندی جدید را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(20),
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="font-IRANSans-Bold">
                                نام دسته بندی
                                <sup className="mr-1 font-IRANSans text-gray-800">(انگلیسی)</sup>
                            </label>
                            <AppInput
                                elem="input"
                                id="name"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا نام کوتاه دسته بندی جدید را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[
                                    minValidator(5),
                                    maxValidator(20),
                                    englishLettersValidator(),
                                ]}
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
            <DataTable title="دسته بندی ها" className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-50 py-3">
                            <th className="whitespace-nowrap p-2 text-md">شناسه</th>
                            <th className="whitespace-nowrap p-2 text-md">عنوان</th>
                            <th className="whitespace-nowrap p-2 text-md">
                                short name (نام کوتاه)
                            </th>
                            <th className="whitespace-nowrap p-2 text-md">ویرایش</th>
                            <th className="whitespace-nowrap p-2 text-md">حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCategories.map((category, index) => (
                            <tr key={category._id}>
                                <th className="whitespace-nowrap p-3 text-sm">{index + 1}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{category.title}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{category.name}</th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-blue-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => editCategoryHandler(category)}
                                    >
                                        ویرایش
                                    </Button>
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-red-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => removeCategoryHandler(category)}
                                    >
                                        حذف
                                    </Button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DataTable>
            <ReactModal
                appElement={document.body}
                isOpen={isOpenModal}
                contentLabel="Modal #1 Global Style Override Example"
                onRequestClose={() => setIsOpenModal(false)}
            >
                <div className="rounded-lg p-5">
                    <div className="flex w-96 max-w-full flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title" className="">
                                عنوان دسته بندی
                            </label>
                            <input
                                type="text"
                                className="h-10 rounded-sm border border-gray-300  p-1 outline-0"
                                placeholder="عنوان جدید را وارد کنید..."
                                value={editTitleValue}
                                onChange={(e) => setEditTitleValue(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="font-IRANSans-Bold">
                                نام دسته بندی
                                <sup className="mr-1 font-IRANSans text-gray-800">(انگلیسی)</sup>
                            </label>
                            <input
                                type="text"
                                className="h-10 rounded-sm border border-gray-300  p-1 outline-0"
                                placeholder="نام جدید را وارد کنید..."
                                value={editNameValue}
                                onChange={(e) => setEditNameValue(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button
                        className="mt-5 flex h-10 w-full items-center justify-center rounded-sm bg-blue-hover text-white"
                        onclick={editHandler}
                    >
                        ثبت
                    </Button>
                </div>
            </ReactModal>
        </div>
    );
};

export default Categories;
