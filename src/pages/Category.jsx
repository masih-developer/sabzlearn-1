import { useState } from "react";
import {
    FaBorderAll,
    FaAlignLeft,
    FaAngleDown,
    FaSearch,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa";
import CourseBox from "../components/common/CourseBox";

const Category = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [sortingCategoryBy, setSortingCategoryBy] = useState("مرتب سازی پیش فرض");

    return (
        <div className="mt-28 lg:mt-5">
            <div className="container">
                <div className="mb-5 flex flex-col items-center justify-between gap-3 rounded-lg p-5 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] md:flex-row lg:gap-0">
                    <div className="flex w-full flex-col items-center gap-3 md:flex-row">
                        <div className="flex items-center justify-center gap-3 self-start">
                            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e5e5] bg-blue-hover text-white">
                                <FaBorderAll />
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e5e5]">
                                <FaAlignLeft />
                            </button>
                        </div>
                        <div className="relative flex w-full flex-col rounded-md border border-[#e5e5e5] text-[#7d7e7f] md:w-64 ">
                            <button
                                className="flex cursor-pointer items-center justify-between gap-1 p-2"
                                onClick={() => setIsOpenMenu((prev) => !prev)}
                            >
                                {sortingCategoryBy}
                                <FaAngleDown
                                    className={`text-lg duration-300 ${
                                        isOpenMenu ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <ul
                                className={`${
                                    isOpenMenu ? "block" : "hidden"
                                } absolute right-0 top-full z-10 w-full overflow-hidden rounded-b-md border-b-2 border-b-primary-color bg-white shadow-[0_0_6px_rgba(0,0,0,0.2)]`}
                            >
                                {[
                                    "مرتب سازی پیش فرض",
                                    "مرتب سازی بر اساس محبوبیت",
                                    "مرتب سازی بر اساس امتیاز",
                                    "مرتب سازی بر اساس آخرین",
                                    "مرتب سازی بر اساس ارزان ترین",
                                    "مرتب سازی بر اساس گران ترین",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="cursor-pointer p-2 text-dark-color duration-300 hover:bg-[#dddddd]"
                                        onClick={() => {
                                            setSortingCategoryBy(item);
                                            setIsOpenMenu(false);
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-full max-w-full shrink-0 items-center rounded-md border border-[#e5e5e5] p-2 md:w-64">
                        <input
                            type="text"
                            className="w-full border-none pl-2 text-dark-color outline-none"
                            placeholder="جست و جوی دوره..."
                        />
                        <FaSearch className="shrink-0 text-lg text-dark-color" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    <CourseBox
                        hoverEffect
                        img="/images/courses/fareelancer.png"
                        title="دوره پروژه های فریلنسری"
                        teacher="رضا دولتی"
                        studentCount="1000"
                        price={2_000_000}
                    />
                    <CourseBox
                        hoverEffect
                        img="/images/courses/jango.png"
                        title="دوره پروژه های فریلنسری"
                        teacher="رضا دولتی"
                        studentCount="1000"
                        price={2_000_000}
                    />
                    <CourseBox
                        hoverEffect
                        img="/images/courses/js_project.png"
                        title="دوره پروژه های فریلنسری"
                        teacher="رضا دولتی"
                        studentCount="1000"
                        price={2_000_000}
                    />
                    <CourseBox
                        hoverEffect
                        img="/images/courses/js_project.png"
                        title="دوره پروژه های فریلنسری"
                        teacher="رضا دولتی"
                        studentCount="1000"
                        price={2_000_000}
                    />
                </div>
                <div className="mt-10 flex w-full items-center justify-center gap-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f0f0f1] text-dark-color duration-300 hover:bg-primary-color hover:text-white">
                        <FaArrowRight />
                    </button>
                    <ul className="flex items-center justify-center gap-2">
                        <li className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#f0f0f1] text-dark-color duration-300 hover:bg-primary-color hover:text-white">
                            1
                        </li>
                        <li className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#f0f0f1] text-dark-color duration-300 hover:bg-primary-color hover:text-white">
                            2
                        </li>
                        <li className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#f0f0f1] text-dark-color duration-300 hover:bg-primary-color hover:text-white">
                            3
                        </li>
                    </ul>
                    <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f0f0f1] text-dark-color duration-300 hover:bg-primary-color hover:text-white">
                        <FaArrowLeft />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Category;
