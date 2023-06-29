import { useEffect, useState } from "react";
import DataTable from "../../components/AdminPanel/DataTable";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { toast } from "react-hot-toast";
import AppInput from "../../components/common/AppInput";
import useForm from "../../hooks/useForm";
import {
    emailValidator,
    maxValidator,
    minValidator,
    requiredValidator,
} from "../../validators/rules";
import DropZone from "../../components/common/DropZone";

const AdminPanelCourses = () => {
    const [courses, setCourses] = useState([]);
    const [categoryIDTitle, setCategoryIDTitle] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isSelectedMenu, setIsSelectedMenu] = useState(false);
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

    const getAllCoursesHandler = () => {
        fetch("http://localhost:4000/v1/courses")
            .then((res) => res.json())
            .then((result) => {
                setCourses(result);
            });
    };

    useEffect(() => {
        getAllCoursesHandler();

        fetch("http://localhost:4000/v1/category")
            .then((res) => res.json())
            .then((result) => {
                setCategories(result);
            });
    }, []);

    useEffect(() => {
        const resultCategoryID = courses.map((item) => item.categoryID.title);
        setCategoryIDTitle(resultCategoryID);
    }, [courses]);

    const removeCourseHandler = (course) => {
        toast(
            () => (
                <div className="flex flex-col gap-2">
                    <span>
                        آیا از <span className="font-IRANSans-Bold text-black">حذف</span> این دوره
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
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            const toastID = toast.loading("درحال انجام عملیات");
            fetch(`http://localhost:4000/v1/courses/${course._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorageData.token}`,
                },
            })
                .then(async (res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    const errText = await res.text();
                    throw new Error(errText);
                })
                .then(() => {
                    toast.success("حذف دوره با موفقیت انجام شد.", { id: toastID });
                    getAllCoursesHandler();
                })
                .catch((err) => {
                    console.log(JSON.parse(err.message));
                    toast.error("انجام عملیات با خطا مواجه شد.", { id: toastID });
                });
        };
    };

    const submitUserHandler = (e) => {
        e.preventDefault();
    };

    const selectCategoryHandler = (e) => {
        if (e.target.value === "default") {
            setIsSelectedMenu(false);
        } else {
            setIsSelectedMenu(true);
            console.log(e.target.value);
        }
    };

    return (
        <>
            <div className="pb-5">
                <div className="mb-5 rounded-lg p-5 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.1)]">
                    <h3 className="mb-5 font-IRANSans-Bold text-lg">افزودن محصول جدید</h3>
                    <form action="#" onSubmit={(e) => submitUserHandler(e)}>
                        <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="font-IRANSans-Bold">
                                    نام محصول
                                </label>
                                <AppInput
                                    elem="input"
                                    id="name"
                                    onInputHandler={onInputHandler}
                                    placeholder="لطفا نام محصول را وارد کنید..."
                                    className="rounded-md p-2 placeholder:text-sm"
                                    validations={[
                                        requiredValidator(),
                                        minValidator(8),
                                        maxValidator(20),
                                    ]}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="price" className="font-IRANSans-Bold">
                                    قیمت محصول
                                </label>
                                <AppInput
                                    elem="input"
                                    id="price"
                                    onInputHandler={onInputHandler}
                                    placeholder="لطفا قیمت محصول جدید را وارد کنید..."
                                    className="rounded-md p-2 placeholder:text-sm"
                                    validations={[
                                        requiredValidator(),
                                        minValidator(8),
                                        maxValidator(20),
                                    ]}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="count" className="font-IRANSans-Bold">
                                    تعداد محصول
                                </label>
                                <AppInput
                                    elem="input"
                                    id="count"
                                    onInputHandler={onInputHandler}
                                    placeholder="لطفا ایمیل کاربر را وارد کنید..."
                                    className="rounded-md p-2 placeholder:text-sm"
                                    validations={[emailValidator()]}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-IRANSans-Bold">دسته بندی دوره ها</label>
                                <select
                                    className={`h-[41.8px] rounded-md border outline-0 ${
                                        isSelectedMenu ? "border-green-500" : "border-red-500"
                                    }`}
                                    onChange={selectCategoryHandler}
                                >
                                    <option value="default" defaultValue>
                                        انتخاب دسته بندی
                                    </option>
                                    {categories.map((category) => (
                                        <option
                                            value={category._id}
                                            className=""
                                            key={category._id}
                                        >
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="font-IRANSans-Bold">
                                    توضیحات محصول
                                </label>
                                <AppInput
                                    elem="textarea"
                                    id="description"
                                    onInputHandler={onInputHandler}
                                    placeholder="متن را بنویسید..."
                                    className="h-[120px] min-h-[41.6px] rounded-md p-2 placeholder:text-sm"
                                    validations={[requiredValidator()]}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="font-IRANSans-Bold">
                                    عکس محصول
                                </label>
                                <DropZone />
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
                <DataTable title="دوره ها" className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-blue-50 py-3">
                                <th className="whitespace-nowrap p-2 text-md">شناسه</th>
                                <th className="whitespace-nowrap p-2 text-md">عنوان</th>
                                <th className="whitespace-nowrap p-2 text-md">مبلغ</th>
                                <th className="whitespace-nowrap p-2 text-md">وضعیت</th>
                                <th className="whitespace-nowrap p-2 text-md">لینک</th>
                                <th className="whitespace-nowrap p-2 text-md">مدرس</th>
                                <th className="whitespace-nowrap p-2 text-md">دسته بندی</th>
                                <th className="whitespace-nowrap p-2 text-md">ویرایش</th>
                                <th className="whitespace-nowrap p-2 text-md">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={course._id}>
                                    <th className="whitespace-nowrap p-3 text-sm">{index + 1}</th>
                                    <th className="whitespace-nowrap p-3 text-sm">{course.name}</th>
                                    <th className="whitespace-nowrap p-3 text-sm">
                                        {course.price.toLocaleString()}
                                    </th>
                                    <th className="whitespace-nowrap p-3 text-sm">
                                        {course.status.toLowerCase() === "start"
                                            ? "درحال برگزاری"
                                            : "به پایان رسیده"}
                                    </th>
                                    <th className="whitespace-nowrap p-3 text-sm">
                                        <Link
                                            to={`/course-info/${course.shortName}`}
                                            className="text-blue-500 underline"
                                        >
                                            رفتن به آدرس
                                        </Link>
                                    </th>
                                    <th className="whitespace-nowrap p-3 text-sm">
                                        {course.creator}
                                    </th>
                                    <th className="whitespace-nowrap p-3 text-sm">
                                        {categoryIDTitle[index]}
                                    </th>
                                    <th className="whitespace-nowrap p-3 text-sm">
                                        <Button
                                            className="rounded-md bg-blue-500 px-3 py-2 font-IRANSans text-sm text-white"
                                            onclick={() => setIsOpenModal(true)}
                                        >
                                            ویرایش
                                        </Button>
                                    </th>
                                    <th className="whitespace-nowrap p-3 text-sm">
                                        <Button
                                            className="rounded-md bg-red-500 px-3 py-2 font-IRANSans text-sm text-white"
                                            onclick={() => removeCourseHandler(course)}
                                        >
                                            حذف
                                        </Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </DataTable>
            </div>
            <ReactModal
                appElement={document.body}
                isOpen={isOpenModal}
                contentLabel="Modal #1 Global Style Override Example"
                onRequestClose={() => setIsOpenModal(false)}
            >
                <p>Modal text!</p>
                <button>Close Modal</button>
            </ReactModal>
        </>
    );
};

export default AdminPanelCourses;
