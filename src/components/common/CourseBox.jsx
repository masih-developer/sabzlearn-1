import { useState } from "react";
import { FaArrowLeft, FaChalkboardTeacher, FaRegStar, FaStar, FaUserFriends } from "react-icons/fa";

const CourseBox = ({ img, title, teacher, studentCount, price, hoverEffect }) => {
    const [isShowImg, setIsShowImg] = useState(false);
    return (
        <div
            className={`flex select-none flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] ${
                hoverEffect ? "duration-300 hover:-translate-y-2" : ""
            }`}
        >
            <a href="" className={`block w-full`}>
                <img
                    src={img}
                    alt=""
                    className={`max-h-[210px] w-full object-cover`}
                    onLoad={() => setIsShowImg(true)}
                />
            </a>
            {!isShowImg && (
                <div className="flex h-[210px] w-full items-center justify-center bg-white">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-100 border-t-primary-color"></div>
                </div>
            )}
            <div className="px-2 py-3">
                <a href="#">
                    <h4 className="text-dark-color duration-300 hover:text-blue-hover">{title}</h4>
                </a>
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                        <FaChalkboardTeacher className="text-xl" />
                        <a href="#">
                            <p className="font-IRANSans-Medium text-xs duration-300 hover:text-blue-hover">
                                {teacher}
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
                        <p className="text-sm">{studentCount}</p>
                    </div>
                    <span className="text-lg text-[#9c9c9c]">{price}</span>
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
    );
};

export default CourseBox;
