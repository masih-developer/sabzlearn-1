import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../common/Button";
import ArticleBox from "../common/ArticleBox";

const ArticleBoxes = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/articles")
            .then((res) => res.json())
            .then((result) => {
                setArticles(result);
            });
    }, []);

    return (
        <section className="mt-20">
            <div className="container">
                <div className="flex items-center justify-between">
                    <SectionTitle title="جدیدترین مقاله ها" caption="پیش به سوی ارتقای دانش" />
                    <Button to="/articles/1" className="app-btn">
                        تمامی مقاله ها
                        <FaArrowLeft />
                    </Button>
                </div>
                <div className="mt-10 flex" style={{ direction: "ltr" }}>
                    <Swiper
                        speed={800}
                        dir="rtl"
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        loop={true}
                        className="py-1"
                    >
                        {articles.map((article) => (
                            <SwiperSlide key={article._id}>
                                <ArticleBox {...article} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ArticleBoxes;
