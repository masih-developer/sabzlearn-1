import SectionTitle from "../common/SectionTitle";
import { FaArrowLeft } from "react-icons/fa";

const ArticleBoxes = () => {
    return (
        <section className="mt-20">
            <div className="container">
                <div className="flex items-center justify-between">
                    <SectionTitle title="جدیدترین مقاله ها" caption="پیش به سوی ارتقای دانش" />
                    <button className="app-btn">
                        تمامی مقاله ها
                        <FaArrowLeft />
                    </button>
                </div>
                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-[0_5px_30px_rgba(70,72,77,0.08)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/blog/1.jpg" alt="" className="w-full" />
                        </a>
                        <div className="px-5 py-6">
                            <a href="#">
                                <h3 className="font-IRANSans-Bold text-dark-color duration-300 hover:text-blue-hover">
                                    نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                </h3>
                            </a>
                            <p className="mt-2 text-xs text-[#898989]">
                                زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
                                های مختلفی برای تسریع...
                            </p>
                            <button className="mt-5 flex items-center justify-center rounded-md border-2 border-primary-color p-1.5 text-sm text-primary-color duration-300 hover:bg-primary-color hover:text-white">
                                بیشتر بخوانید
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-[0_5px_30px_rgba(70,72,77,0.08)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/blog/3.jpeg" alt="" className="w-full" />
                        </a>
                        <div className="px-5 py-6">
                            <a href="#">
                                <h3 className="font-IRANSans-Bold text-dark-color duration-300 hover:text-blue-hover">
                                    نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                </h3>
                            </a>
                            <p className="mt-2 text-xs text-[#898989]">
                                زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
                                های مختلفی برای تسریع...
                            </p>
                            <button className="mt-5 flex items-center justify-center rounded-md border-2 border-primary-color p-1.5 text-sm text-primary-color duration-300 hover:bg-primary-color hover:text-white">
                                بیشتر بخوانید
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-[0_5px_30px_rgba(70,72,77,0.08)] duration-300 hover:-translate-y-2">
                        <a href="" className="block w-full">
                            <img src="./images/blog/2.jpg" alt="" className="w-full" />
                        </a>
                        <div className="px-5 py-6">
                            <a href="#">
                                <h3 className="font-IRANSans-Bold text-dark-color duration-300 hover:text-blue-hover">
                                    نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                                </h3>
                            </a>
                            <p className="mt-2 text-xs text-[#898989]">
                                زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
                                های مختلفی برای تسریع...
                            </p>
                            <button className="mt-5 flex items-center justify-center rounded-md border-2 border-primary-color p-1.5 text-sm text-primary-color duration-300 hover:bg-primary-color hover:text-white">
                                بیشتر بخوانید
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleBoxes;
