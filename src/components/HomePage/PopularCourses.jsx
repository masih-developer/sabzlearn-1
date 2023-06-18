import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SectionTitle from "../common/SectionTitle";
import CourseBox from "../common/CourseBox";
import { useEffect, useState } from "react";

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/courses/popular")
            .then((res) => res.json())
            .then((result) => {
                setCourses(result);
            });
    }, []);

    return (
        <section className="mt-20">
            <div className="container">
                <SectionTitle title="محبوب ترین دوره ها" />
                <div className="mt-10" style={{ direction: "ltr" }}>
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
                        {courses.map((course) => (
                            <SwiperSlide key={course._id}>
                                <CourseBox
                                    img={course.cover}
                                    title={course.name}
                                    teacher={course.creator}
                                    rate={5}
                                    studentCount={course.registers}
                                    price={course.price}
                                    path={course.shortName}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
