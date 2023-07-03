import { FaAngleLeft, FaRegClock, FaRegEye, FaRegFolder, FaRegUser } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArticleInfoBox from "../components/ArticleInfoPage/ArticleInfoBox";
import CommentTextarea from "../components/ArticleInfoPage/CommentTextarea";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import DOMPurify from "dompurify";

const ArticleInfo = () => {
    const { articleName } = useParams();
    const navigate = useNavigate();
    const [articleInfo, setArticleInfo] = useState([]);
    const [articleCategory, setArticleCategory] = useState({});
    const [articleCreator, setArticleCreator] = useState({});
    const [articleCreatedAt, setArticleCreatedAt] = useState("");

    useEffect(() => {
        fetch(`http://localhost:4000/v1/articles/${articleName}`)
            .then(async (res) => {
                if (res.ok) {
                    return res.json();
                }
                const errorText = await res.text();
                throw new Error(errorText);
            })
            .then((articleInfo) => {
                setArticleInfo(articleInfo);
                setArticleCategory(articleInfo.categoryID);
                setArticleCreator(articleInfo.creator);
                setArticleCreatedAt(articleInfo.createdAt);
            })
            .catch((err) => {
                if (err.message) {
                    toast.error(JSON.parse(err.message).message);
                    return navigate("/");
                }
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="container mt-20 lg:mt-5">
                <Breadcrumb
                    links={[
                        { id: 1, title: "خانه", path: "/" },
                        {
                            id: 2,
                            title: "آموزش برنامه نویسی فرانت اند",
                            path: "/course-info/frontend",
                        },
                        { id: 3, title: "دوره متخصص جاوا اسکریپت", path: "/course-info/js-expert" },
                    ]}
                />
                <div className="mt-5 grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="rounded-lg px-5 py-7 shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
                            <h1 className="border-b-2 border-b-[#f3f3f3] pb-3 font-IRANSans-Bold text-xl text-dark-color lg:text-2xl">
                                {articleInfo.title}
                            </h1>
                            <div className="my-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                                <div className="flex items-center gap-1.5 text-[#8f8f8f]">
                                    <FaRegFolder className="text-lg" />
                                    <Link
                                        to="/"
                                        className="text-xs duration-300 hover:text-blue-hover"
                                    >
                                        {articleCategory.title}
                                    </Link>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#8f8f8f]">
                                    <FaRegUser className="text-lg" />
                                    <span className="text-xs">
                                        ارسال شده توسط {articleCreator.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#8f8f8f]">
                                    <FaRegClock className="text-lg" />
                                    <span className="text-xs">
                                        تاریخ انتشار: {articleCreatedAt.slice(0, 10)}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#8f8f8f]">
                                    <FaRegEye className="text-lg" />
                                    <span className="text-xs">2.14k بازدید</span>
                                </div>
                            </div>
                            <img
                                src={`http://localhost:4000/courses/covers/${articleInfo.cover}`}
                                alt=""
                                className="mb-7 block w-full object-cover"
                            />
                        </div>
                        <div
                            className="my-5"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(articleInfo.body),
                            }}
                        ></div>
                        <CommentTextarea />
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="sticky top-5 flex flex-col gap-5">
                            <ArticleInfoBox title="پر امتیاز ترین دوره ها">
                                <div className="flex flex-col gap-5">
                                    <Link to="/" className="flex items-center gap-2">
                                        <div className="h-9 w-20 overflow-hidden rounded-md">
                                            <img
                                                src="/images/courses/js_project.png"
                                                alt=""
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-IRANSans-Medium text-sm text-[#8d8d8d]">
                                            پروژه های تخصصی با جاوا اسکریپت
                                        </span>
                                    </Link>
                                    <Link to="/" className="flex items-center gap-2">
                                        <div className="h-9 w-20 overflow-hidden rounded-md">
                                            <img
                                                src="/images/courses/fareelancer.png"
                                                alt=""
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-IRANSans-Medium text-sm text-[#8d8d8d]">
                                            تعیین قیمت پروژه ها فریلنسری
                                        </span>
                                    </Link>
                                    <Link to="/" className="flex items-center gap-2">
                                        <div className="h-9 w-20 overflow-hidden rounded-md">
                                            <img
                                                src="/images/courses/nodejs.png"
                                                alt=""
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-IRANSans-Medium text-sm text-[#8d8d8d]">
                                            دوره Api نویسی
                                        </span>
                                    </Link>
                                    <Link to="/" className="flex items-center gap-2">
                                        <div className="h-9 w-20 overflow-hidden rounded-md">
                                            <img
                                                src="/images/courses/jango.png"
                                                alt=""
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-IRANSans-Medium text-sm text-[#8d8d8d]">
                                            متخصص جنگو
                                        </span>
                                    </Link>
                                </div>
                            </ArticleInfoBox>
                            <ArticleInfoBox title="دسترسی سریع">
                                <ul className="flex flex-col">
                                    <li className="group flex items-center gap-1 border-b border-b-[#eeeeee] px-2 py-2.5 duration-300 hover:bg-[#f8f9fa] hover:pr-3">
                                        <FaAngleLeft className="text-[#909aa7] duration-300 group-hover:text-primary-color" />
                                        <Link className="text-sm text-dark-color duration-300 group-hover:text-blue-hover">
                                            صفحه اصلی
                                        </Link>
                                    </li>
                                    <li className="group flex items-center gap-1 border-b border-b-[#eeeeee] px-2 py-2.5 duration-300 hover:bg-[#f8f9fa] hover:pr-3">
                                        <FaAngleLeft className="text-[#909aa7] duration-300 group-hover:text-primary-color" />
                                        <Link className="text-sm text-dark-color duration-300 group-hover:text-blue-hover">
                                            فرانت اند
                                        </Link>
                                    </li>
                                    <li className="group flex items-center gap-1 border-b border-b-[#eeeeee] px-2 py-2.5 duration-300 hover:bg-[#f8f9fa] hover:pr-3">
                                        <FaAngleLeft className="text-[#909aa7] duration-300 group-hover:text-primary-color" />
                                        <Link className="text-sm text-dark-color duration-300 group-hover:text-blue-hover">
                                            امنیت
                                        </Link>
                                    </li>
                                    <li className="group flex items-center gap-1 border-b border-b-[#eeeeee] px-2 py-2.5 duration-300 hover:bg-[#f8f9fa] hover:pr-3">
                                        <FaAngleLeft className="text-[#909aa7] duration-300 group-hover:text-primary-color" />
                                        <Link className="text-sm text-dark-color duration-300 group-hover:text-blue-hover">
                                            پایتون
                                        </Link>
                                    </li>
                                    <li className="group flex items-center gap-1 border-b border-b-[#eeeeee] px-2 py-2.5 duration-300 hover:bg-[#f8f9fa] hover:pr-3">
                                        <FaAngleLeft className="text-[#909aa7] duration-300 group-hover:text-primary-color" />
                                        <Link className="text-sm text-dark-color duration-300 group-hover:text-blue-hover">
                                            مهارت های نرم
                                        </Link>
                                    </li>
                                </ul>
                            </ArticleInfoBox>
                            <ArticleInfoBox title="مقاله های جدید">
                                <ul className="flex flex-col">
                                    <li className="border-b border-b-[#eeeeee] py-3">
                                        <Link className="text-md text-sm text-dark-color duration-300 hover:text-blue-hover sm:text-base">
                                            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                        </Link>
                                    </li>
                                    <li className="border-b border-b-[#eeeeee] py-3">
                                        <Link className="text-md text-sm text-dark-color duration-300 hover:text-blue-hover sm:text-base">
                                            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                        </Link>
                                    </li>
                                    <li className="border-b border-b-[#eeeeee] py-3">
                                        <Link className="text-md text-sm text-dark-color duration-300 hover:text-blue-hover sm:text-base">
                                            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                        </Link>
                                    </li>
                                    <li className="border-b border-b-[#eeeeee] py-3">
                                        <Link className="text-md text-sm text-dark-color duration-300 hover:text-blue-hover sm:text-base">
                                            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                        </Link>
                                    </li>
                                    <li className="border-b border-b-[#eeeeee] py-3">
                                        <Link className="text-md text-sm text-dark-color duration-300 hover:text-blue-hover sm:text-base">
                                            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                        </Link>
                                    </li>
                                    <li className="border-b border-b-[#eeeeee] py-3">
                                        <Link className="text-md text-sm text-dark-color duration-300 hover:text-blue-hover sm:text-base">
                                            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                        </Link>
                                    </li>
                                </ul>
                            </ArticleInfoBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleInfo;
