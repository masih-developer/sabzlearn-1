import { FaEnvelope, FaLockOpen, FaUser, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="mt-20 lg:mt-10">
            <div className="container">
                <div className="mx-auto w-[500px] max-w-full rounded-md border-b-4 border-b-primary-color px-5 py-7 shadow-[0_0_19px_rgba(168,172,185,0.3)]">
                    <h3 className="mb-1 text-center font-IRANSans-Medium text-lg text-dark-color">
                        ساخت حساب کاربری
                    </h3>
                    <span className="mx-auto block w-fit text-center text-sm text-dark-color">
                        خوشحالیم که قراره به جمع با بپیوندی
                    </span>
                    <div className="my-5 mb-5 flex items-center justify-center gap-3 rounded-md bg-grey-color p-3 text-sm text-dark-color">
                        <span className="text-sm">قبلا ثبت نام کرده اید؟</span>
                        <Link
                            to="/register"
                            className="rounded-md bg-[#666666] px-2 py-1 text-xs text-white"
                        >
                            وارد شوید
                        </Link>
                    </div>
                    <form action="#" className="flex flex-col gap-4">
                        <div className="flex items-center justify-between rounded-md border border-[#dcdcdc] p-2">
                            <input
                                type="text"
                                className="w-full border-0 pl-2 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="نام کاربری"
                            />
                            <FaUser className="shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="flex items-center justify-between rounded-md border border-[#dcdcdc] p-2">
                            <input
                                type="text"
                                className="w-full border-0 pl-2 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="آدرس ایمیل"
                            />
                            <FaEnvelope className="shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="flex items-center justify-between rounded-md border border-[#dcdcdc] p-2">
                            <input
                                type="password"
                                className="w-full border-0 pl-2 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="رمز عبور"
                            />
                            <FaLockOpen className="shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <button
                            className="relative flex items-center justify-center rounded-md bg-primary-color p-2.5 text-white"
                            type="submit"
                        >
                            عضویت
                            <FaUserPlus className="absolute bottom-0 right-2.5 top-0 m-auto text-xl" />
                        </button>
                    </form>
                    <div className="mt-7">
                        <span className="text-sm text-dark-color">سلام کاربر محترم:</span>
                        <ul className="telg mt-1 list-disc pr-5 text-xs text-dark-color sm:text-sm">
                            <li>
                                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده
                                کنید.
                            </li>
                            <li>ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمی کنیم.</li>
                            <li>لطفا رمز عبور خود را در فواصل زمانی کوتاه تغییر دهید.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
