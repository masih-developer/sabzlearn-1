import { useEffect, useState } from "react";
import DataTable from "../../components/AdminPanel/DataTable";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { toast } from "react-hot-toast";
import AppInput from "../../components/common/AppInput";
import { englishLettersValidator, minValidator, requiredValidator } from "../../validators/rules";
import Dropzone from "react-dropzone";
import useForm from "../../hooks/useForm";
import Editor from "../../components/AdminPanel/Editor";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isSelectedMenu, setIsSelectedMenu] = useState(false);
    const [articleCategory, setArticleCategory] = useState("");
    const [articleCoverFile, setArticleCoverFile] = useState({});
    const [articleBody, setArticleBody] = useState("");

    const [formState, onInputHandler] = useForm(
        {
            title: { value: "", isValid: false },
            description: { value: "", isValid: false },
            shortname: { value: "", isValid: false },
        },
        false
    );

    useEffect(() => {
        getAllArticlesHandler();
        getAllCategoriesHandler();
    }, []);

    const getAllArticlesHandler = () => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch("http://localhost:4000/v1/articles", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorageData.token}`,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                setArticles(result);
            });
    };

    const getAllCategoriesHandler = () => {
        fetch("http://localhost:4000/v1/category")
            .then((res) => res.json())
            .then((result) => {
                setCategories(result);
            });
    };

    const removeArticleHandler = (article) => {
        toast(
            () => (
                <div className="flex flex-col gap-2">
                    <span>
                        آیا از <span className="font-IRANSans-Bold text-black">حذف</span> این مقاله
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
            const toastID = toast.loading("درحال حذف مقاله مدنظر...");
            fetch(`http://localhost:4000/v1/articles/${article._id}`, {
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
                    const errorText = await res.text();
                    throw new Error(errorText);
                })
                .then(() => {
                    toast.success("مقاله مد نظر با موفقیت حذف شد.", { id: toastID });
                    getAllArticlesHandler();
                })
                .catch((err) => {
                    if (err.message) {
                        toast.error(JSON.parse(err.message).message, { id: toastID });
                        return;
                    }
                    toast.error("انجام عملیات با خطا مواجه شد.", { id: toastID });
                });
        };
    };

    const selectCategoryHandler = (e) => {
        if (e.target.value === "default") {
            setIsSelectedMenu(false);
            setArticleCategory("");
        } else {
            setIsSelectedMenu(true);
            setArticleCategory(e.target.value);
        }
    };

    const submitUserHandler = (e) => {
        e.preventDefault();
        if (
            formState.isFormValid &&
            isSelectedMenu &&
            articleCoverFile?.name &&
            articleBody.trim()
        ) {
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            let formData = new FormData();
            formData.append("title", formState.inputs.title.value);
            formData.append("body", articleBody);
            formData.append("description", formState.inputs.description.value);
            formData.append("shortName", formState.inputs.shortname.value);
            formData.append("cover", articleCoverFile);
            formData.append("categoryID", articleCategory);

            const toastID = toast.loading("درحال ساخت مقاله...");
            fetch("http://localhost:4000/v1/articles", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorageData.token}`,
                },
                body: formData,
            })
                .then(async (res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    const errorText = await res.text();
                    throw new Error(errorText);
                })
                .then(() => {
                    toast.success("مقاله با موفقیت ساخته شد.", { id: toastID });
                    getAllArticlesHandler();
                })
                .catch((err) => {
                    if (err.message) {
                        toast.error(JSON.parse(err.message).message, { id: toastID });
                        return;
                    }
                    toast.error("انجام عملیات با خطا مواجه شد.", { id: toastID });
                });
        }
    };

    return (
        <div className="pb-5">
            <div className="mb-5 rounded-lg p-5 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.1)]">
                <h3 className="mb-5 font-IRANSans-Bold text-lg">افزودن مقاله جدید</h3>
                <form action="#" onSubmit={submitUserHandler}>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title" className="font-IRANSans-Bold">
                                نام مقاله
                            </label>
                            <AppInput
                                elem="input"
                                id="title"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا نام مقاله را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[requiredValidator()]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="shortname" className="font-IRANSans-Bold">
                                url مقاله
                            </label>
                            <AppInput
                                elem="input"
                                id="shortname"
                                onInputHandler={onInputHandler}
                                placeholder="لطفا ایمیل کاربر را وارد کنید..."
                                className="rounded-md p-2 placeholder:text-sm"
                                validations={[minValidator(5), englishLettersValidator()]}
                            />
                        </div>
                        <div className="col-span-2 flex flex-col gap-1">
                            <label htmlFor="description" className="font-IRANSans-Bold">
                                چکیده
                            </label>
                            <AppInput
                                elem="textarea"
                                id="description"
                                onInputHandler={onInputHandler}
                                placeholder="بدنه مقاله را بنویسید..."
                                className="h-[150px] min-h-[41.6px] rounded-md p-2 placeholder:text-sm"
                                validations={[requiredValidator()]}
                            />
                        </div>
                        <div className="col-span-2 flex flex-col gap-1">
                            <label htmlFor="body" className="font-IRANSans-Bold">
                                محتوای مقاله
                            </label>
                            <Editor value={articleBody} setValue={setArticleBody} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="description" className="font-IRANSans-Bold">
                                عکس محصول
                            </label>
                            <Dropzone
                                accept={{
                                    "image/jpeg": [],
                                    "image/jpg": [],
                                    "image/png": [],
                                }}
                                maxFiles={1}
                                onDrop={(acceptedFiles) => setArticleCoverFile(acceptedFiles[0])}
                            >
                                {({
                                    getRootProps,
                                    getInputProps,
                                    acceptedFiles,
                                    isDragAccept,
                                    isDragActive,
                                }) => (
                                    <section>
                                        <div
                                            {...getRootProps()}
                                            className={`flex min-h-[120px] w-full flex-col justify-center rounded-md border border-dashed text-center outline-0 ${
                                                acceptedFiles.length
                                                    ? "border-green-500"
                                                    : "border-red-500"
                                            }`}
                                        >
                                            <input {...getInputProps()} className="outline-0" />
                                            <p>
                                                {!isDragAccept &&
                                                !isDragActive &&
                                                !acceptedFiles.length
                                                    ? "عکس محصول مورد نظر را آپلود کنید."
                                                    : null}
                                                {isDragActive && "درحال آپلود عکس..."}
                                                {acceptedFiles.length
                                                    ? "عکس با موفقیت آپلود شد."
                                                    : null}
                                            </p>
                                            {acceptedFiles.length ? (
                                                <ul className="mt-2 flex h-full flex-col items-center justify-center gap-2 border-t border-t-gray-200 pt-2">
                                                    {acceptedFiles.map((file, index) => (
                                                        <li key={index}>{file.name}</li>
                                                    ))}
                                                </ul>
                                            ) : null}
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-IRANSans-Bold">دسته بندی مقاله ها</label>
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
                                    <option value={category._id} className="" key={category._id}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="mt-5 flex items-center justify-center rounded-md bg-blue-hover px-5 py-2 text-white disabled:opacity-70"
                        disabled={
                            !formState.isFormValid ||
                            !isSelectedMenu ||
                            !articleCoverFile?.name ||
                            !articleBody.trim()
                        }
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
                            <th className="whitespace-nowrap p-2 text-md">لینک</th>
                            <th className="whitespace-nowrap p-2 text-md">نویسنده</th>
                            <th className="whitespace-nowrap p-2 text-md">ویرایش</th>
                            <th className="whitespace-nowrap p-2 text-md">حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article, index) => (
                            <tr key={article._id}>
                                <th className="whitespace-nowrap p-3 text-sm">{index + 1}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{article.title}</th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Link
                                        to={`/article-info/${article.shortName}`}
                                        className="text-blue-500 underline"
                                    >
                                        {article.shortName}
                                    </Link>
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    {article.creator.name}
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-blue-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        // onclick={() => setIsOpenModal(true)}
                                    >
                                        ویرایش
                                    </Button>
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-red-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => removeArticleHandler(article)}
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
    );
};

export default Articles;
