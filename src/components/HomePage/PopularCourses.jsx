import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SectionTitle from "../common/SectionTitle";
import CourseBox from "../common/CourseBox";

const PopularCourses = () => {
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
                        <SwiperSlide>
                            <CourseBox
                                img="./images/courses/fareelancer.png"
                                title="دوره متخصص جنگو"
                                teacher="رضا دولتی"
                                rate={5}
                                studentCount={1000}
                                price={2_000_000}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseBox
                                img="./images/courses/nodejs.png"
                                title="دوره متخصص جنگو"
                                teacher="رضا دولتی"
                                rate={5}
                                studentCount={1000}
                                price={2_000_000}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseBox
                                img="./images/courses/youtuber.png"
                                title="دوره متخصص جنگو"
                                teacher="رضا دولتی"
                                rate={5}
                                studentCount={1000}
                                price={2_000_000}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseBox
                                img="./images/courses/js_project.png"
                                title="دوره متخصص جنگو"
                                teacher="رضا دولتی"
                                rate={5}
                                studentCount={1000}
                                price={2_000_000}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseBox
                                img="./images/courses/jango.png"
                                title="دوره متخصص جنگو"
                                teacher="رضا دولتی"
                                rate={5}
                                studentCount={1000}
                                price={2_000_000}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseBox
                                img="./images/courses/jango.png"
                                title="دوره متخصص جنگو"
                                teacher="رضا دولتی"
                                rate={5}
                                studentCount={1000}
                                price={2_000_000}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
