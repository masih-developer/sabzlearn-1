import { FaLockOpen, FaUser } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import AppInput from "../components/common/AppInput";
import Button from "../components/common/Button";
import { maxValidator, minValidator, requiredValidator } from "../validators/rules";
import useForm from "../hooks/useForm";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const [isLoadingLogginBtn, setIsLoadingLogginBtn] = useState(false);
    const authContext = useContext(AuthContext);
    const [isVerifyGoogleRecaptcha, setIsVerifyGoogleRecaptcha] = useState(false);
    const navigate = useNavigate();
    const [formState, onInputHandler] = useForm(
        {
            username: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const userLoginHandler = (e) => {
        e.preventDefault();
        const userData = {
            identifier: formState.inputs.username.value,
            password: formState.inputs.password.value,
        };

        setIsLoadingLogginBtn(true);
        fetch("http://localhost:4000/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(async (res) => {
                if (!res.ok) {
                    toast.error("هیچ کاربری با این ایمیل یا نام کاربری وجود ندارد.");
                    return res.text().then((text) => {
                        throw new Error(text);
                    });
                }
                return res.json();
            })
            .then((result) => {
                toast.success("به حساب کاربری خود خوش آمدید.");
                return result;
            })
            .then((value) => {
                authContext.login(value.accessToken);
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => setIsLoadingLogginBtn(false));
    };

    const onChangeHandler = () => {
        setIsVerifyGoogleRecaptcha(true);
    };

    return (
        <div className="mt-20 lg:mt-10">
            <div className="container">
                <div className="mx-auto w-[500px] max-w-full rounded-md border-b-4 border-b-primary-color px-5 py-7 shadow-[0_0_19px_rgba(168,172,185,0.3)]">
                    <h3 className="mb-1 text-center font-IRANSans-Medium text-lg text-dark-color">
                        ورود به حساب کاربری
                    </h3>
                    <span className="mx-auto block w-fit text-center text-sm text-dark-color">
                        خوشحالیم دوباره میبینیمت دوست عزیز :)
                    </span>
                    <div className="my-5 mb-5 flex items-center justify-center gap-3 rounded-md bg-grey-color p-3 text-sm text-dark-color">
                        <span className="text-sm">کاربر جدید هستید؟</span>
                        <Link
                            to="/register"
                            className="rounded-md bg-[#666666] px-2 py-1 text-xs text-white"
                        >
                            ثبت نام
                        </Link>
                    </div>
                    <form
                        action="#"
                        className="flex flex-col gap-4"
                        onSubmit={(e) => userLoginHandler(e)}
                    >
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="text"
                                id="username"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="نام کاربری یا آدرس ایمیل"
                                elem="input"
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(20),
                                ]}
                                onInputHandler={onInputHandler}
                            />
                            <FaUser className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="password"
                                id="password"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="رمز عبور"
                                elem="input"
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(18),
                                ]}
                                onInputHandler={onInputHandler}
                            />
                            <FaLockOpen className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="mx-auto max-w-full">
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <Button
                            className="relative flex items-center justify-center rounded-md bg-primary-color p-2.5 text-white disabled:opacity-70"
                            type="submit"
                            disabled={!formState.isFormValid || !isVerifyGoogleRecaptcha}
                        >
                            {isLoadingLogginBtn ? (
                                <span className="block h-6 w-6 animate-spin rounded-full border-[3px] border-green-100 border-t-primary-color"></span>
                            ) : (
                                "ورود"
                            )}
                            <CgLogIn className="absolute bottom-0 right-2.5 top-0 m-auto text-xl" />
                        </Button>
                        <div className="flex flex-col items-start justify-between gap-1 text-sm text-dark-color sm:flex-row sm:gap-0">
                            <div className="flex select-none items-center gap-1 text-xs sm:text-sm">
                                <input type="checkbox" id="checkbox" className="" />
                                <label htmlFor="checkbox" className="">
                                    مرا به خاطر داشته باش
                                </label>
                            </div>
                            <Link to="/" className="duration-300 hover:text-blue-hover">
                                رمز عبور را فراموش کرده اید؟
                            </Link>
                        </div>
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

export default Login;
