import { toast } from "react-hot-toast";
import useForm from "../../hooks/useForm";
import { emailValidator } from "../../validators/rules";
import AppInput from "../common/AppInput";

const Footer = () => {
    const [formState, onInputHandler] = useForm({ email: { value: "", isValid: false } }, false);

    const submitFormHandler = (e) => {
        e.preventDefault();
        const userEmail = { email: formState.inputs.email.value };

        const sendEmailHandler = async () => {
            await fetch("http://localhost:4000/v1/newsletters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userEmail),
            });
        };

        toast.promise(sendEmailHandler(), {
            loading: "درحال ارسال...",
            success: "ایمیل شما با موفقیت ارسال شد.",
            error: "ارسال ایمیل با خطا مواجه شد.",
        });
    };

    return (
        <footer className="mt-20">
            <div className="container">
                <div className="lg relative grid grid-cols-1 gap-7 rounded-xl bg-[#f0f2f7] p-10 after:absolute after:left-0 after:right-0 after:top-full after:mx-auto after:h-4 after:w-2/6 after:rounded-bl-full after:rounded-br-full after:bg-primary-color after:content-[''] md:grid-cols-4 xl:grid-cols-3">
                    <div className="md:col-span-4 xl:col-span-1">
                        <h3 className="footer-title">درباره ما</h3>
                        <div className="mt-5">
                            <p className="text-justify text-[#7d7e7f]">
                                وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در
                                فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود
                                که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل
                                قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز
                                آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی فعالیت
                                میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره
                                و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به این معنی هست
                                که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در
                                آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که
                                مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه
                                دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند !
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-2 xl:col-span-1">
                        <h3 className="footer-title">آخرین مطالب</h3>
                        <div className="mt-5 flex flex-col gap-4">
                            <a
                                href="#"
                                className="block text-dark-color duration-300 hover:text-blue-hover"
                            >
                                نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                            </a>
                            <a
                                href="#"
                                className="block text-dark-color duration-300 hover:text-blue-hover"
                            >
                                چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون
                            </a>
                            <a
                                href="#"
                                className="block text-dark-color duration-300 hover:text-blue-hover"
                            >
                                آموزش نصب پایتون ( Python ) در در مک، ویندوز و لینوکس | گام به گام و
                                تصویری
                            </a>
                            <a
                                href="#"
                                className="block text-dark-color duration-300 hover:text-blue-hover"
                            >
                                بهترین فریم ورک های فرانت اند | 16 فریم ورک Front end بررسی معایب و
                                مزایا
                            </a>
                            <a
                                href="#"
                                className="block text-dark-color duration-300 hover:text-blue-hover"
                            >
                                معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش رایگان
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-2 xl:col-span-1">
                        <h3 className="footer-title">دسترسی سریع</h3>
                        <div className="mt-5 flex gap-5">
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-dark-color duration-300 hover:text-blue-hover"
                                    >
                                        آموزش Html
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-dark-color duration-300 hover:text-blue-hover"
                                    >
                                        آموزش جاوا اسکریپت
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-dark-color duration-300 hover:text-blue-hover"
                                    >
                                        آموزش ری اکت
                                    </a>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-dark-color duration-300 hover:text-blue-hover"
                                    >
                                        آموزش Css
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-dark-color duration-300 hover:text-blue-hover"
                                    >
                                        آموزش بوت استرپ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-dark-color duration-300 hover:text-blue-hover"
                                    >
                                        آموزش پایتون
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 flex flex-col">
                            <h3 className="footer-title">عضویت در خبرنامه</h3>
                            <h5 className="my-5 text-sm text-dark-color lg:text-md">
                                جهت اطلاع از آخرین اخبار و تخفیف های سایت، مشترک شوید!
                            </h5>
                            <form
                                onSubmit={(e) => submitFormHandler(e)}
                                className="flex h-10 items-center overflow-hidden rounded-md"
                            >
                                <AppInput
                                    type="text"
                                    id="email"
                                    elem="input"
                                    onInputHandler={onInputHandler}
                                    validations={[emailValidator()]}
                                    placeholder="ایمیل خود را وارد کنید..."
                                    className="h-full w-full rounded-br-md rounded-tr-md p-2 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="block h-full shrink-0 bg-primary-color px-3 py-1 text-white disabled:opacity-70"
                                    disabled={!formState.isFormValid}
                                >
                                    عضویت
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 flex items-center justify-center bg-[#f0f2f7] py-8">
                <h3 className="px-2 text-center font-IRANSans-Bold text-dark-color">
                    کلیه حقوق برای آکادمی آموزش برنامه نویسی سبزلرن محفوظ است.
                </h3>
            </div>
        </footer>
    );
};

export default Footer;
