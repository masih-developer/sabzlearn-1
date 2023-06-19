import { useEffect, useState } from "react";
import { FaBorderAll, FaAlignLeft, FaSearch } from "react-icons/fa";
import CourseBox from "../components/common/CourseBox";
import { useParams } from "react-router-dom";
import Pagination from "../components/common/Pagination";
import SelectMenu from "../components/common/SelectMenu";

const Category = () => {
    const { categoryName } = useParams();
    const [courses, setCourses] = useState([]);
    const [arrangedCourses, setArrangedCourses] = useState([]);
    const [shownCourses, setShownCourses] = useState([]);
    const [menuStatus, setMenuStatus] = useState("مرتب سازی پیش فرض");
    const [searchValue, setSearchValue] = useState("");
    const [showCourseType, setShowCourseType] = useState("row");

    useEffect(() => {
        fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
            .then((res) => res.json())
            .then((result) => {
                setCourses(result);
                setArrangedCourses(result);
            });
    }, [categoryName]);

    useEffect(() => {
        switch (menuStatus) {
            case "مرتب سازی پیش فرض": {
                setArrangedCourses(courses);
                break;
            }
            case "دوره های رایگان": {
                const freeCourses = courses.filter((course) => course.price === 0);
                setArrangedCourses(freeCourses);
                break;
            }
            case "دوره های غیر رایگان": {
                const nonFreeCourses = courses.filter((course) => course.price !== 0);
                setArrangedCourses(nonFreeCourses);
                break;
            }
            case "مرتب سازی بر اساس آخرین": {
                const lastCourses = [...courses].sort(
                    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                );
                setArrangedCourses(lastCourses);
                break;
            }
            case "مرتب سازی بر اساس اولین": {
                const firstCourses = [...courses].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                setArrangedCourses(firstCourses);
                break;
            }
            case "مرتب سازی بر اساس ارزان ترین": {
                const cheapestCourses = [...courses].sort((a, b) => a.price - b.price);
                setArrangedCourses(cheapestCourses);
                break;
            }
            case "مرتب سازی بر اساس گران ترین": {
                const mostExpensiveCourses = [...courses].sort((a, b) => b.price - a.price);
                setArrangedCourses(mostExpensiveCourses);
                break;
            }
            default:
                setArrangedCourses(courses);
        }
    }, [courses, menuStatus]);

    const searchValueChangeHandler = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        const filteredCourses = [...courses].filter((course) =>
            course.name.toLowerCase().includes(value.toLowerCase())
        );
        setArrangedCourses(filteredCourses);
    };

    return (
        <div className="mt-28 lg:mt-5">
            <div className="container">
                {courses.length ? (
                    <>
                        <div className="mb-5 flex flex-col items-center justify-between gap-3 rounded-lg p-5 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] md:flex-row lg:gap-0">
                            <div className="flex w-full flex-col items-center gap-3 md:flex-row">
                                <div className="flex items-center justify-center gap-3 self-start">
                                    <button
                                        className={`flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e5e5] ${
                                            showCourseType === "row"
                                                ? "bg-blue-hover text-white"
                                                : "bg-none text-dark-color"
                                        }`}
                                        title="row"
                                        onClick={() => setShowCourseType("row")}
                                    >
                                        <FaBorderAll />
                                    </button>
                                    <button
                                        className={`flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e5e5] ${
                                            showCourseType === "column"
                                                ? "bg-blue-hover text-white"
                                                : "bg-none text-dark-color"
                                        }`}
                                        title="column"
                                        onClick={() => setShowCourseType("column")}
                                    >
                                        <FaAlignLeft />
                                    </button>
                                </div>
                                <SelectMenu
                                    className="w-full border border-[#e5e5e5] md:w-64"
                                    items={[
                                        "مرتب سازی پیش فرض",
                                        "دوره های رایگان",
                                        "دوره های غیر رایگان",
                                        "مرتب سازی بر اساس آخرین",
                                        "مرتب سازی بر اساس اولین",
                                        "مرتب سازی بر اساس ارزان ترین",
                                        "مرتب سازی بر اساس گران ترین",
                                    ]}
                                    onChange={(e) => setMenuStatus(e.item)}
                                />
                            </div>
                            <div className="flex w-full max-w-full shrink-0 items-center rounded-md border border-[#e5e5e5] p-2 md:w-64">
                                <input
                                    type="text"
                                    className="w-full border-none pl-2 text-dark-color outline-none"
                                    placeholder="جست و جوی دوره..."
                                    value={searchValue}
                                    onChange={(value) => searchValueChangeHandler(value)}
                                />
                                <FaSearch className="shrink-0 text-lg text-dark-color" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            {shownCourses.map((course) => (
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
                            items={arrangedCourses}
                            itemsCount={6}
                            pathname={`/category-info/${categoryName}`}
                            setShownCourses={setShownCourses}
                        />
                    </>
                ) : (
                    <div className="texty flex h-20 w-full items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">
                        <h2 className="font-IRANSans-Medium text-xl">
                            هیچ دوره ای برای نمایش وجود ندارد.
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;
