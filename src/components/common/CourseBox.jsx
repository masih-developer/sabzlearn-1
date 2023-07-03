import { useState } from "react";
import { FaArrowLeft, FaChalkboardTeacher, FaRegStar, FaStar, FaUserFriends } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

const CourseBox = ({ img, title, teacher, studentCount, price, hoverEffect, path }) => {
    const [isShowImg, setIsShowImg] = useState(false);
    return (
        <div
            className={`flex select-none flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] ${
                hoverEffect ? "duration-300 hover:-translate-y-2" : null
            }`}
        >
            <Link to={`/course-info/${path}`} className={`block w-full`}>
                <img
                    src={`http://localhost:4000/courses/covers/${img}`}
                    alt=""
                    className={`max-h-[210px] w-full object-cover`}
                    onLoad={() => setIsShowImg(true)}
                />
            </Link>
            {!isShowImg && (
                <div className="flex h-[210px] w-full items-center justify-center bg-white">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-100 border-t-primary-color"></div>
                </div>
            )}
            <div className="px-2 py-3">
                <Button to={`/course-info/${path}`}>
                    <h4 className="truncate text-dark-color duration-300 hover:text-blue-hover">
                        {title}
                    </h4>
                </Button>
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                        <FaChalkboardTeacher className="text-xl" />
                        <Button to="/">
                            <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                {teacher}
                            </p>
                        </Button>
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
                        <p className="text-sm">{studentCount}</p>
                    </div>
                    {price === 0 ? (
                        <span className="text-primary-color">رایگان!</span>
                    ) : (
                        <span className="text-lg text-[#9c9c9c]">
                            <sup className="pl-1 text-xs">تومان</sup>
                            {price.toLocaleString()}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-center border-t-2 border-t-[#e8e8e8] py-3">
                <Button
                    to={`/course-info/${path}`}
                    className="flex items-center justify-center gap-2 font-IRANSans-Medium text-primary-color duration-300 hover:text-blue-hover"
                >
                    مشاهده اطلاعات
                    <FaArrowLeft />
                </Button>
            </div>
        </div>
    );
};

export default CourseBox;
