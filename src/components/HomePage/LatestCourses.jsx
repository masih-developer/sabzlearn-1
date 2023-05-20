import SectionTitle from "../common/SectionTitle";
import { FaArrowLeft, FaChalkboardTeacher, FaStar, FaRegStar, FaUserFriends } from "react-icons/fa";

const LatestCourses = () => {
    return (
        <section className="py-8">
            <div className="container">
                <div className="flex items-center justify-between">
                    <SectionTitle title="جدیدترین دوره ها" caption="سکوی پرتاپ شما به سمت موفقیت" />
                    <button className="app-btn">
                        تمامی دوره ها
                        <FaArrowLeft />
                    </button>
                </div>
                <div className="mt-7 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/courses/fareelancer.png" alt="" className="w-full" />
                        </a>
                        <div className="px-2 py-3">
                            <a href="#">
                                <h4 className="text-dark-color duration-300 hover:text-blue-hover">
                                    دوره پروژه های فریلنسری
                                </h4>
                            </a>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaChalkboardTeacher className="text-xl" />
                                    <a href="#">
                                        <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                            رضا دولتی
                                        </p>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-[2px] text-lg text-[#f9a134]">
                                    <FaRegStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaUserFriends className="text-xl" />
                                    <p className="text-sm">1000</p>
                                </div>
                                <span className="text-lg text-[#9c9c9c]">1000,000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-t-2 border-t-[#e8e8e8] py-3">
                            <a
                                href=""
                                className="flex items-center justify-center gap-2 font-IRANSans-Medium text-primary-color duration-300 hover:text-blue-hover"
                            >
                                مشاهده اطلاعات
                                <FaArrowLeft />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/courses/jango.png" alt="" className="w-full" />
                        </a>
                        <div className="px-2 py-3">
                            <a href="#">
                                <h4 className="text-dark-color duration-300 hover:text-blue-hover">
                                    دوره پروژه های فریلنسری
                                </h4>
                            </a>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaChalkboardTeacher className="text-xl" />
                                    <a href="#">
                                        <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                            رضا دولتی
                                        </p>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-[2px] text-lg text-[#f9a134]">
                                    <FaRegStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaUserFriends className="text-xl" />
                                    <p className="text-sm">1000</p>
                                </div>
                                <span className="text-lg text-[#9c9c9c]">1000,000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-t-2 border-t-[#e8e8e8] py-3">
                            <a
                                href=""
                                className="flex items-center justify-center gap-2 font-IRANSans-Medium text-primary-color duration-300 hover:text-blue-hover"
                            >
                                مشاهده اطلاعات
                                <FaArrowLeft />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/courses/js_project.png" alt="" className="w-full" />
                        </a>
                        <div className="px-2 py-3">
                            <a href="#">
                                <h4 className="text-dark-color duration-300 hover:text-blue-hover">
                                    دوره پروژه های فریلنسری
                                </h4>
                            </a>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaChalkboardTeacher className="text-xl" />
                                    <a href="#">
                                        <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                            رضا دولتی
                                        </p>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-[2px] text-lg text-[#f9a134]">
                                    <FaRegStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaUserFriends className="text-xl" />
                                    <p className="text-sm">1000</p>
                                </div>
                                <span className="text-lg text-[#9c9c9c]">1000,000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-t-2 border-t-[#e8e8e8] py-3">
                            <a
                                href=""
                                className="flex items-center justify-center gap-2 font-IRANSans-Medium text-primary-color duration-300 hover:text-blue-hover"
                            >
                                مشاهده اطلاعات
                                <FaArrowLeft />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/courses/youtuber.png" alt="" className="w-full" />
                        </a>
                        <div className="px-2 py-3">
                            <a href="#">
                                <h4 className="text-dark-color duration-300 hover:text-blue-hover">
                                    دوره پروژه های فریلنسری
                                </h4>
                            </a>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaChalkboardTeacher className="text-xl" />
                                    <a href="#">
                                        <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                            رضا دولتی
                                        </p>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-[2px] text-lg text-[#f9a134]">
                                    <FaRegStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaUserFriends className="text-xl" />
                                    <p className="text-sm">1000</p>
                                </div>
                                <span className="text-lg text-[#9c9c9c]">1000,000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-t-2 border-t-[#e8e8e8] py-3">
                            <a
                                href=""
                                className="flex items-center justify-center gap-2 font-IRANSans-Medium text-primary-color duration-300 hover:text-blue-hover"
                            >
                                مشاهده اطلاعات
                                <FaArrowLeft />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/courses/python.png" alt="" className="w-full" />
                        </a>
                        <div className="px-2 py-3">
                            <a href="#">
                                <h4 className="text-dark-color duration-300 hover:text-blue-hover">
                                    دوره پروژه های فریلنسری
                                </h4>
                            </a>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaChalkboardTeacher className="text-xl" />
                                    <a href="#">
                                        <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                            رضا دولتی
                                        </p>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-[2px] text-lg text-[#f9a134]">
                                    <FaRegStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaUserFriends className="text-xl" />
                                    <p className="text-sm">1000</p>
                                </div>
                                <span className="text-lg text-[#9c9c9c]">1000,000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-t-2 border-t-[#e8e8e8] py-3">
                            <a
                                href=""
                                className="flex items-center justify-center gap-2 font-IRANSans-Medium text-primary-color duration-300 hover:text-blue-hover"
                            >
                                مشاهده اطلاعات
                                <FaArrowLeft />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/courses/nodejs.png" alt="" className="w-full" />
                        </a>
                        <div className="px-2 py-3">
                            <a href="#">
                                <h4 className="text-dark-color duration-300 hover:text-blue-hover">
                                    دوره پروژه های فریلنسری
                                </h4>
                            </a>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaChalkboardTeacher className="text-xl" />
                                    <a href="#">
                                        <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                            رضا دولتی
                                        </p>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-[2px] text-lg text-[#f9a134]">
                                    <FaRegStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                                    <FaUserFriends className="text-xl" />
                                    <p className="text-sm">1000</p>
                                </div>
                                <span className="text-lg text-[#9c9c9c]">1000,000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-t-2 border-t-[#e8e8e8] py-3">
                            <a
                                href=""
                                className="flex items-center justify-center gap-2 font-IRANSans-Medium text-primary-color duration-300 hover:text-blue-hover"
                            >
                                مشاهده اطلاعات
                                <FaArrowLeft />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestCourses;
