import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import CourseBox from "../components/common/CourseBox";
import ArticleBox from "../components/common/ArticleBox";

const Search = () => {
    const { value } = useParams();
    const [courses, setCourses] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/v1/search/${value}`)
            .then((res) => res.json())
            .then((result) => {
                setCourses(result.allResultCourses);
                setArticles(result.allResultArticles);
            });
    }, [value]);

    return (
        <div className="mt-24 lg:mt-5">
            <div className="container">
                <div className="">
                    <SectionTitle
                        title="دوره های مرتبط با جستجوی شما"
                        caption="سکوی پرتاب شما به سمت موفقیت"
                    />
                    {courses.length ? (
                        <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            {courses.map((course) => (
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
                    ) : (
                        <div className="texty mt-5 flex h-20 w-full items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">
                            <h2 className="font-IRANSans-Medium text-xl">
                                هیچ دوره ای مرتبط با جستجوی شما وجود ندارد.
                            </h2>
                        </div>
                    )}
                </div>
                <div className="mt-10">
                    <SectionTitle
                        title="مقاله های مرتبط با جستجوی شما"
                        caption="سکوی پرتاب شما به سمت موفقیت"
                    />
                    {articles.length ? (
                        <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            {articles.map((article) => (
                                <ArticleBox {...article} key={article._id} />
                            ))}
                        </div>
                    ) : (
                        <div className="texty mt-5 flex h-20 w-full items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">
                            <h2 className="font-IRANSans-Medium text-xl">
                                هیچ دوره ای مرتبط با جستجوی شما وجود ندارد.
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
