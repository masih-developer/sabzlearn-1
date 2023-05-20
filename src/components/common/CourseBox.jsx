import { FaArrowLeft, FaChalkboardTeacher, FaRegStar, FaStar, FaUserFriends } from "react-icons/fa";

const CourseBox = ({ img, title, teacher, studentCount, price }) => {
    return (
        <div className="flex flex-col bg-white shadow-[0_0_19px_rgba(168,172,185,0.3)] rounded-lg overflow-hidden select-none">
            <a href="" className="block w-full">
                <img src={img} alt="" className="w-full" />
            </a>
            <div className="py-3 px-2">
                <a href="#">
                    <h4 className="text-dark-color duration-300 hover:text-blue-hover">{title}</h4>
                </a>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex justify-center items-center text-[#6c757d] gap-1">
                        <FaChalkboardTeacher className="text-xl" />
                        <a href="#">
                            <p className="text-xs duration-300 hover:text-blue-hover font-IRANSans-Medium">
                                {teacher}
                            </p>
                        </a>
                    </div>
                    <div className="flex justify-center items-center gap-[2px] text-lg text-[#f9a134]">
                        <FaRegStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex justify-center items-center text-[#6c757d] gap-1">
                        <FaUserFriends className="text-xl" />
                        <p className="text-sm">{studentCount}</p>
                    </div>
                    <span className="text-lg text-[#9c9c9c]">{price}</span>
                </div>
            </div>
            <div className="flex justify-center items-center py-3 border-t-[#e8e8e8] border-t-2">
                <a
                    href=""
                    className="text-primary-color flex justify-center items-center gap-2 duration-300 hover:text-blue-hover font-IRANSans-Medium"
                >
                    مشاهده اطلاعات
                    <FaArrowLeft />
                </a>
            </div>
        </div>
    );
};

export default CourseBox;
