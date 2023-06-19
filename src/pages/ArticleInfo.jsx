import {
    FaAngleLeft,
    FaArrowLeft,
    FaArrowRight,
    FaFacebookF,
    FaRegClock,
    FaRegEye,
    FaRegFolder,
    FaRegStar,
    FaRegUser,
    FaStar,
    FaTelegram,
    FaTwitter,
} from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import ArticleInfoBox from "../components/ArticleInfoPage/ArticleInfoBox";
import CommentTextarea from "../components/ArticleInfoPage/CommentTextarea";
import { useEffect, useState } from "react";

const ArticleInfo = () => {
    const { articleName } = useParams();
    const [articleInfo, setArticleInfo] = useState([]);
    const [articleCategory, setArticleCategory] = useState({});
    const [articleCreator, setArticleCreator] = useState({});
    const [articleCreatedAt, setArticleCreatedAt] = useState("");

    useEffect(() => {
        fetch(`http://localhost:4000/v1/articles/${articleName}`)
            .then((res) => res.json())
            .then((articleInfo) => {
                setArticleInfo(articleInfo);
                setArticleCategory(articleInfo.categoryID);
                setArticleCreator(articleInfo.creator);
                setArticleCreatedAt(articleInfo.createdAt);
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
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-[1px]">
                                    <FaStar className="text-[#f9a134]" />
                                    <FaStar className="text-[#f9a134]" />
                                    <FaStar className="text-[#f9a134]" />
                                    <FaStar className="text-[#f9a134]" />
                                    <FaRegStar className="text-[#f9a134]" />
                                </div>
                                <span className="text-[#7d7d7f]">4.2/5 - (5 امتیاز)</span>
                            </div>
                            <p className="my-7 text-justify text-md leading-7 text-[#7d7e7f] md:text-right">
                                جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند است که
                                به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها، اپلیکیشن‌ها و وب
                                اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از یادگیری html و css
                                معمولاً باید آموزش جاوا اسکریپت را نیز فرا بگیرید. . چرا که این زبان
                                تکمیل‌کننده html و css بوده و در چنین شرایطی موقعیت‌های شغلی بیشتر
                                را در اختیار خواهید داشت و همچنین می‌توانید پروژه‌های گسترده‌تری را
                                انجام دهید. در حال حاضر با وجود منابع رایگان موجود در وب شما به
                                راحتی می‌توانید زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به
                                همین واسطه در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
                                برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که بهترین
                                سایت آموزش جاوا اسکریپت کدام است.
                            </p>
                            <div className="mb-7 rounded-3xl bg-[#f2f2f2] p-7">
                                <h4 className="mb-3 font-IRANSans-Bold text-md text-[#333333]">
                                    آنچه در این مقاله خواهید خواند:
                                </h4>
                                <ul className="flex flex-col gap-1.5">
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-md text-blue-hover hover:underline"
                                        >
                                            معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-md text-blue-hover hover:underline"
                                        >
                                            یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-md text-blue-hover hover:underline"
                                        >
                                            ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <img src="/images/blog/2.jpg" alt="" className="mx-auto mb-7 block" />
                            <div className="mb-7">
                                <h2 className="mb-4 font-IRANSans-Medium text-2xl text-[#008c25]">
                                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                                </h2>
                                <p className="text-justify leading-7 text-[#7d7e7f] md:text-right">
                                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت
                                    آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و
                                    منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا
                                    تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید و یا اینکه با
                                    استفاده از گوگل ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها
                                    استفاده کنید. به همین دلیل در انتهای محتوا به شما خواهیم گفت که
                                    راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که شما
                                    بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را
                                    یاد بگیرید.
                                </p>
                            </div>
                            <img src="/images/blog/4.png" alt="" className="mx-auto block" />
                            <div className="mb-16">
                                <h2 className="mb-4 font-IRANSans-Medium text-2xl text-[#008c25]">
                                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                                </h2>
                                <p className="text-justify leading-7 text-[#7d7e7f] md:text-right">
                                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت
                                    آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و
                                    منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا
                                    تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید و یا اینکه با
                                    استفاده از گوگل ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها
                                    استفاده کنید. به همین دلیل در انتهای محتوا به شما خواهیم گفت که
                                    راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که شما
                                    بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را
                                    یاد بگیرید.
                                </p>
                            </div>
                            <div className="mb-7">
                                <h2 className="mb-4 font-IRANSans-Medium text-2xl text-[#008c25]">
                                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                                </h2>
                                <p className="text-justify leading-7 text-[#7d7e7f] md:text-right">
                                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت
                                    آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و
                                    منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا
                                    تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید و یا اینکه با
                                    استفاده از گوگل ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها
                                    استفاده کنید. به همین دلیل در انتهای محتوا به شما خواهیم گفت که
                                    راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که شما
                                    بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را
                                    یاد بگیرید.
                                </p>
                            </div>
                            <img src="/images/blog/3.jpg" alt="" className="mx-auto block" />
                            <div className="flex items-center gap-3">
                                <span className="text-[#7d7e7f]">اشتراک گذاری :</span>
                                <div className="flex items-center gap-2">
                                    <Link
                                        to="/"
                                        className="text-lg text-[#7b868a] duration-300 hover:text-blue-hover"
                                    >
                                        <FaTelegram />
                                    </Link>
                                    <Link
                                        to="/"
                                        className="text-lg text-[#7b868a] duration-300 hover:text-blue-hover"
                                    >
                                        <FaTwitter />
                                    </Link>
                                    <Link
                                        to="/"
                                        className="text-lg text-[#7b868a] duration-300 hover:text-blue-hover"
                                    >
                                        <FaFacebookF />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="my-10 flex flex-col items-center justify-between gap-5 rounded-lg bg-[#f0f2f7] px-5 py-10 md:flex-row md:gap-10">
                            <div className="flex items-center gap-5">
                                <Link
                                    to="/"
                                    className="text-[#adb5db] duration-300 hover:text-blue-hover"
                                >
                                    <FaArrowRight />
                                </Link>
                                <Link
                                    to="/"
                                    className="text-center text-md text-dark-color duration-300 hover:text-blue-hover sm:text-base"
                                >
                                    سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه
                                    نویسان
                                </Link>
                            </div>
                            <div className="flex items-center gap-5">
                                <Link
                                    to="/"
                                    className="text-center text-md text-dark-color duration-300 hover:text-blue-hover sm:text-base"
                                >
                                    سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه
                                    نویسان
                                </Link>
                                <Link
                                    to="/"
                                    className="text-[#adb5db] duration-300 hover:text-blue-hover"
                                >
                                    <FaArrowLeft />
                                </Link>
                            </div>
                        </div>
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
