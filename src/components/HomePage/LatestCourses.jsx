import { useEffect, useState } from "react";
import CourseBox from "../common/CourseBox";
import SectionTitle from "../common/SectionTitle";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../common/Button";

const LatestCourses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/courses")
            .then((res) => res.json())
            .then((result) => {
                setAllCourses(result);
            });
    }, []);
    return (
        <section className="py-8">
            <div className="container">
                <div className="flex items-center justify-between">
                    <SectionTitle title="جدیدترین دوره ها" caption="سکوی پرتاپ شما به سمت موفقیت" />
                    <Button to="/courses/1" className="app-btn">
                        تمامی دوره ها
                        <FaArrowLeft />
                    </Button>
                </div>
                <div className="mt-7 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {[...allCourses]
                        .reverse()
                        .splice(0, 6)
                        .map((course) => (
                            <CourseBox
                                key={course._id}
                                hoverEffect
                                img={course.cover}
                                title={course.name}
                                teacher={course.creator}
                                studentCount={course.registers}
                                price={course.price}
                                path={course.shortName}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default LatestCourses;
