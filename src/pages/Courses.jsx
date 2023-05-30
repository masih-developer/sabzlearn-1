import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import CourseBox from "../components/common/CourseBox";

const Courses = () => {
    return (
        <div>
            <div className="container">
                <Breadcrumb
                    links={[
                        { id: 1, title: "خانه", path: "/" },
                        { id: 2, title: "تمامی دوره ها", path: "/courses" },
                    ]}
                />
                <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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

export default Courses;
