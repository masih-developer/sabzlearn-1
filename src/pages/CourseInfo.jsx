import {
    FaTelegram,
    FaTwitter,
    FaFacebookF,
    FaGraduationCap,
    FaClock,
    FaCalendarAlt,
    FaUser,
    FaInfoCircle,
    FaPlay,
    FaUserGraduate,
    FaRegComments,
    FaRegEye,
    FaChartLine,
} from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import Accordion from "../components/common/Accordion/Accordion";

const CourseInfo = () => {
    return (
        <div className="mt-20 lg:mt-0">
            <div className="container">
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
                <section className="my-5 grid grid-cols-2 gap-5 rounded-lg p-5 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)]">
                    <div>
                        <button className="romd flex items-center justify-center rounded-md bg-[#d5f5dd] p-2 text-xs text-primary-color duration-300 hover:text-blue-hover">
                            آموزش برنامه نویسی فرانت اند
                        </button>
                        <h2 className="mt-5 font-IRANSans-Medium text-2xl text-[#464749]">
                            آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
                        </h2>
                        <p className="mb-7 mt-6 text-[#7b868a]">
                            امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری
                            که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با Vanilla Js پیاده
                            سازی نمی کند و همیشه از کتابخانه ها و فریمورک های موجود استفاده می کند.
                            پس شما هم اگه میخواید یک برنامه نویس عالی فرانت اند باشید، باید کتابخانه
                            های کاربردی که در بازار کار استفاده می شوند را به خوبی بلد باشید
                        </p>
                        <div className="flex items-center gap-5">
                            <Link className="text-[#b1bbbf] duration-300 hover:text-blue-hover">
                                <FaTelegram className="text-xl" />
                            </Link>
                            <Link className="text-[#b1bbbf] duration-300 hover:text-blue-hover">
                                <FaTwitter className="text-xl" />
                            </Link>
                            <Link className="text-[#b1bbbf] duration-300 hover:text-blue-hover">
                                <FaFacebookF className="text-xl" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <video
                            src=""
                            poster="/images/courses/js_project.png"
                            className="w-full rounded-lg"
                            controls
                        ></video>
                    </div>
                </section>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="flex items-center gap-4 rounded-lg p-5 shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
                                <FaGraduationCap className="text-4xl text-primary-color" />
                                <div className="flex flex-col">
                                    <span className="mb-1 block text-[#858c96]">وضعیت دوره:</span>
                                    <span className="block text-[#7d7e7f]">به اتمام رسیده</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg p-5 shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
                                <FaClock className="text-4xl text-primary-color" />
                                <div className="flex flex-col">
                                    <span className="mb-1 block text-[#858c96]">
                                        مدت زمان دوره:
                                    </span>
                                    <span className="block text-[#7d7e7f]">19 ساعت</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg p-5 shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
                                <FaCalendarAlt className="text-4xl text-primary-color" />
                                <div className="flex flex-col">
                                    <span className="mb-1 block text-[#858c96]">
                                        آخرین بروزرسانی:
                                    </span>
                                    <span className="block text-[#7d7e7f]">1401/03/02</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg p-5 shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
                                <FaUser className="text-4xl text-primary-color" />
                                <div className="flex flex-col">
                                    <span className="mb-1 block text-[#858c96]">روش پشتیبانی:</span>
                                    <span className="block text-[#7d7e7f]">آنلاین</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg p-5 shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
                                <FaInfoCircle className="text-4xl text-primary-color" />
                                <div className="flex flex-col">
                                    <span className="mb-1 block text-[#858c96]">پیش نیاز:</span>
                                    <span className="block text-[#7d7e7f]">Html Css</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg p-5 shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
                                <FaPlay className="text-4xl text-primary-color" />
                                <div className="flex flex-col">
                                    <span className="mb-1 block text-[#858c96]">نوع مشاهده:</span>
                                    <span className="block text-[#7d7e7f]">ظبط شده / آنلاین</span>
                                </div>
                            </div>
                        </div>
                        <div className="my-10 flex flex-col rounded-lg bg-[#f0f2f7] p-5">
                            <div className="mb-5 flex items-center gap-3 text-[#7b868a]">
                                <FaChartLine className="text-2xl " />
                                <span className="text-md">درصد پیشرفت دوره: 100%</span>
                            </div>
                            <div className="relative h-3 w-full overflow-hidden rounded-full bg-[#dde2e7] after:absolute after:right-0 after:top-0 after:h-full after:w-3/4 after:bg-primary-color after:content-['']"></div>
                        </div>
                        <div className="rounded-lg p-7 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)]">
                            <SectionTitle title="آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار" />
                            <img
                                src="/images/info/1.gif"
                                alt=""
                                className="my-7 block w-full rounded-lg object-cover"
                            />
                            <p className="mb-6 text-md text-[#7a7a7a]">
                                کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه
                                چندین کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به
                                شدت از آن ها استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد
                                بازار کار شوید، خیلی اذیت خواهید شد و حتی ممکن است ناامید شوید!
                            </p>
                            <p className="mb-6 text-md text-[#7a7a7a]">
                                در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا
                                اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ
                                مشکلی برای ورود به بازار کار نداشته باشید
                            </p>
                            <SectionTitle title="هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)" />
                            <img
                                src="/images/info/2.jpg"
                                alt=""
                                className="my-7 block w-full rounded-lg object-cover"
                            />
                            <p className="mb-6 text-md text-[#7a7a7a]">
                                وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم، از
                                کتابخانه هایی به اسم Lodash و Formik استفاده می شد، در حالی که من
                                اولین بارم بود اسم Formik را می شنیدم و تا اون موقع از این کتابخانه
                                ها استفاده نکرده بودم.
                            </p>
                            <p className="mb-6 text-md text-[#7a7a7a]">
                                همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از مهم ترین
                                مباحثی هستند که هر برنامه نویس وب برای ورود به بازار کار و کسب درآمد
                                بهتر، راحت و بیشتر باید با آن ها کار کرده باشد
                            </p>
                            <p className="mb-6 text-md text-[#7a7a7a]">
                                همان طور که از اسم این دوره مشخص است، هدف از این دوره آموزش 20 مورد
                                از کاربردی ترین و پر استفاده ترین کتابخانه های جاوا اسکریپت است تا
                                شما بتوانید بعد از این دوره با قدرت و آمادگی بیشتر ادامه مسیر برنامه
                                نویسی وب را ادامه دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و
                                در نهایت وارد بازار کار شده و کسب درآمد کنید.
                            </p>
                            <p className="mb-6 text-md text-[#7a7a7a]">
                                شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی کار نکرده
                                باشید، باید بلد باشید که چطور باید یک کتابخانه جدید را یاد بگیرید.
                                فرض کنید یک یک کتابخانه جدید ساخته شد. آیا شما باید منتظر دوره
                                آموزشی باشید؟! قطعا نه.
                            </p>
                            <p className="mb-7 text-md text-[#7a7a7a]">
                                در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه، نحوه
                                یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش دهیم تا بعد از
                                گذراندن دوره، دیگر وابسته هیچ دوره یا شخص خاصی نباشید و اگر کتابخانه
                                جدیدی به دنیای جاوا اسکریپت و وب اضافه شد، به راحتی بتوانید آن را
                                یاد بگیرید.
                            </p>
                            <div className="mb-7 flex items-center gap-2">
                                <button className="flex items-center justify-center rounded-md border-2 border-primary-color p-2 text-center font-IRANSans-Medium text-primary-color duration-300 hover:bg-primary-color hover:text-white">
                                    دانلود همگانی ویدیو ها
                                </button>
                                <button className="flex items-center justify-center rounded-md border-2 border-primary-color p-2 text-center font-IRANSans-Medium text-primary-color duration-300 hover:bg-primary-color hover:text-white">
                                    دانلود همگانی پیوست ها
                                </button>
                            </div>
                            <div className="flex w-full flex-col gap-5">
                                <Accordion
                                    items={Array(4).fill({
                                        title: "hello",
                                        content: "در این دوره بهترین مطالب آموزش داده خواهد شد.",
                                    })}
                                ></Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="sticky top-4 z-10">
                            <div className="rounded-lg p-5 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)]">
                                <div className="flex w-full select-none items-center justify-center gap-2 rounded-lg bg-[#1fbd50] p-3 font-IRANSans-Medium text-lg text-white shadow-[0_2px_12px_rgba(31,189,80,36%)]">
                                    <FaGraduationCap className="text-3xl" />
                                    دانشجوی دوره هستید
                                </div>
                            </div>
                            <div className="mt-5 rounded-lg p-5 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)]">
                                <div className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#f0f2f7] p-3 text-center">
                                    <span className="flex items-center justify-center gap-1 text-[#7f8187]">
                                        <FaUserGraduate className="text-3xl text-[#555555]" />
                                        تعداد دانشجو:
                                    </span>
                                    <span className="rounded-md bg-[#c4c7cf] px-3 py-1 text-white">
                                        178
                                    </span>
                                </div>
                                <div className="flex select-none items-center justify-center gap-5 p-5">
                                    <div className="flex items-center justify-center gap-2 text-[#7b868a]">
                                        <FaRegComments className="text-2xl" />
                                        <span className="text-md">67 دیدگاه</span>
                                    </div>
                                    <span className=" h-8 w-[1px] bg-[#e5e5e5]"></span>
                                    <div className="flex items-center justify-center gap-2 text-[#7b868a]">
                                        <FaRegEye className="text-2xl" />
                                        <span className="text-md">14234 بازدید</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;
