import CourseBox from "../common/CourseBox";
import SectionTitle from "../common/SectionTitle";
import { FaArrowLeft } from "react-icons/fa";

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
                    <div className="duration-300 hover:-translate-y-2">
                        <CourseBox
                            img="./images/courses/fareelancer.png"
                            title="دوره پروژه های فریلنسری"
                            teacher="رضا دولتی"
                            studentCount="1000"
                            price={2_000_000}
                        />
                    </div>
                    <div className="duration-300 hover:-translate-y-2">
                        <CourseBox
                            img="./images/courses/jango.png"
                            title="دوره پروژه های فریلنسری"
                            teacher="رضا دولتی"
                            studentCount="1000"
                            price={2_000_000}
                        />
                    </div>
                    <div className="duration-300 hover:-translate-y-2">
                        <CourseBox
                            img="./images/courses/js_project.png"
                            title="دوره پروژه های فریلنسری"
                            teacher="رضا دولتی"
                            studentCount="1000"
                            price={2_000_000}
                        />
                    </div>
                    <div className="duration-300 hover:-translate-y-2">
                        <CourseBox
                            img="./images/courses/youtuber.png"
                            title="دوره پروژه های فریلنسری"
                            teacher="رضا دولتی"
                            studentCount="1000"
                            price={2_000_000}
                        />
                    </div>
                    <div className="duration-300 hover:-translate-y-2">
                        <CourseBox
                            img="./images/courses/python.png"
                            title="دوره پروژه های فریلنسری"
                            teacher="رضا دولتی"
                            studentCount="1000"
                            price={2_000_000}
                        />
                    </div>
                    <div className="duration-300 hover:-translate-y-2">
                        <CourseBox
                            img="./images/courses/nodejs.png"
                            title="دوره پروژه های فریلنسری"
                            teacher="رضا دولتی"
                            studentCount="1000"
                            price={2_000_000}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestCourses;
