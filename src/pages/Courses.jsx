import Breadcrumb from "../components/common/Breadcrumb";
import CourseBox from "../components/common/CourseBox";
import { useEffect, useState } from "react";
import Pagination from "../components/common/Pagination";

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [paginatedItems, setPaginatedItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/courses")
            .then((res) => res.json())
            .then((result) => {
                setAllCourses(result);
            });
    }, []);

    return (
        <div>
            <div className="container">
                <Breadcrumb
                    links={[
                        { id: 1, title: "خانه", path: "/" },
                        { id: 2, title: "تمامی دوره ها", path: "/courses" },
                    ]}
                />
                {allCourses.length ? (
                    <>
                        <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            {paginatedItems.map((course) => (
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
                        <Pagination
                            items={allCourses}
                            itemsCount={6}
                            pathname="/courses"
                            setShownCourses={setPaginatedItems}
                        />
                    </>
                ) : (
                    <div className="texty mt-5 flex h-20 w-full items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">
                        <h2 className="font-IRANSans-Medium text-xl">
                            هیچ دوره ای برای نمایش وجود ندارد.
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
