import { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Pagination from "../components/common/Pagination";
import ArticleBox from "../components/common/ArticleBox";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [paginatedItems, setPaginatedItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/articles")
            .then((res) => res.json())
            .then((result) => {
                setArticles(result);
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
                {articles.length ? (
                    <>
                        <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            {paginatedItems.map((article) => (
                                <ArticleBox {...article} key={article._id} />
                            ))}
                        </div>
                        <Pagination
                            items={articles}
                            itemsCount={6}
                            pathname="/articles"
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

export default Articles;
