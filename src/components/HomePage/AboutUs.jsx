import SectionTitle from "../common/SectionTitle";

const AboutUs = () => {
    return (
        <section className="mt-12">
            <div className="container">
                <SectionTitle
                    title="ما چه کمکی بهتون میکنیم؟"
                    caption="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-4 mt-8">
                    <div className="flex justify-start items-center p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden gap-3">
                        <div className="w-[70px] text-[#666666]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="svg-inline--fa fa-copyright about-us__icon"
                                data-icon="copyright"
                                data-prefix="far"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm-.9-288c21.06 0 40.92 8.312 55.83 23.38 9.375 9.344 24.53 9.5 33.97.156 9.406-9.344 9.469-24.53.156-33.97-24-24.22-55.95-37.56-89.95-37.56 0 0 .032 0 0 0-33.97 0-65.95 13.34-89.95 37.56-49.44 49.88-49.44 131 0 180.9 24 24.22 55.98 37.56 89.95 37.56.032 0 0 0 0 0 34 0 65.95-13.34 89.95-37.56 9.312-9.438 9.25-24.62-.156-33.97-9.438-9.312-24.59-9.219-33.97.156-14.91 15.06-34.77 23.38-55.83 23.38 0 0 .031 0 0 0-21.09 0-40.95-8.312-55.89-23.38-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <h3 className="text-xl font-IRANSans-Medium">دوره های اختصاصی</h3>
                            <p className="text-dark-color">با پشتیبانی و کیفیت بالا ارائه میده !</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden gap-3">
                        <div className="w-[70px] text-[#666666]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="svg-inline--fa fa-leaf about-us__icon"
                                data-icon="leaf"
                                data-prefix="fas"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M512 165.4c0 127.9-70.05 235.3-175.3 270.1-20.04 7.938-41.83 12.46-64.69 12.46-64.9 0-125.2-36.51-155.7-94.47-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.219-5.602-.656-12.89-3.098-20.84-16.08-17.75-28.96 9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208s-7.2-16-16-16c-107.4 0-185 34.6-239.71 75.6.193-10.82 1.242-21.84 3.535-33.05 13.47-65.81 66.04-119 131.4-134.2 28.33-6.562 55.68-6.013 80.93-.005 56 13.32 118.2-7.412 149.3-61.24 5.664-9.828 20.02-9.516 24.66.828C502.7 76.76 512 121.9 512 165.4z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <h3 className="text-xl font-IRANSans-Medium">دوره های اختصاصی</h3>
                            <p className="text-dark-color">با پشتیبانی و کیفیت بالا ارائه میده !</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden gap-3">
                        <div className="w-[70px] text-[#666666]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="svg-inline--fa fa-gem about-us__icon"
                                data-icon="gem"
                                data-prefix="fas"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M378.7 32H133.3L256 182.7 378.7 32zM512 192L404.6 50.7 289.6 192H512zM107.4 50.67L0 192h222.4l-115-141.33zM244.3 474.9c3 3.3 7.3 5.1 11.7 5.1s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <h3 className="text-xl font-IRANSans-Medium">دوره های اختصاصی</h3>
                            <p className="text-dark-color">با پشتیبانی و کیفیت بالا ارائه میده !</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden gap-3">
                        <div className="w-[70px] text-[#666666]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="svg-inline--fa fa-crown about-us__icon"
                                data-icon="crown"
                                data-prefix="fas"
                                viewBox="0 0 576 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M576 136c0 22.09-17.91 40-40 40-.248 0-.455-.127-.703-.13l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9c-.25 0-.46.1-1.61.1-22.09 0-40-17.91-40-40s18.81-40 40-40 40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72c0-22.09 18.8-40 40.9-40s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136c0-22.1 17.9-40 40-40s40 17.9 40 40z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <h3 className="text-xl font-IRANSans-Medium">دوره های اختصاصی</h3>
                            <p className="text-dark-color">با پشتیبانی و کیفیت بالا ارائه میده !</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
