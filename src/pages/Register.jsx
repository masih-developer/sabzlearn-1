import { FaEnvelope, FaLockOpen, FaUser, FaUserEdit, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AppInput from "../components/common/AppInput";
import Button from "../components/common/Button";
import {
    confirmPassValidator,
    emailValidator,
    maxValidator,
    minValidator,
    phoneNumberValidator,
    requiredValidator,
} from "../validators/rules";
import useForm from "../hooks/useForm";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const Register = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [formState, onInputHandler] = useForm(
        {
            name: {
                value: "",
                isValid: false,
            },
            username: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            confirmPassword: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const RegisterUserHandler = (e) => {
        e.preventDefault();
        if (formState.isFormValid) {
            const newUser = {
                username: formState.inputs.username.value,
                email: formState.inputs.email.value,
                password: formState.inputs.password.value,
                confirmPassword: formState.inputs.confirmPassword.value,
                name: formState.inputs.name.value,
                phone: formState.inputs.phone.value,
            };
            const toastID = toast.loading("درحال ایجاد حساب");
            fetch("http://localhost:4000/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((res) => {
                    console.log(res);
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error(`${res.status}`);
                    }
                })
                .then((result) => {
                    console.log(result);
                    toast.success("حساب کاربری با موفقیت ساخته شد.", { id: toastID });
                    authContext.login(result.accessToken);
                    navigate("/");
                })
                .catch((err) => {
                    if (+err.message === 403) {
                        toast.error("حساب این کاربر با این شماره تلفن مسدود شده است.", {
                            duration: 5000,
                            id: toastID,
                        });
                        return;
                    }
                    toast.error("انجام عملیات ثبت نام با خطا مواجه شد.", { id: toastID });
                });
        }
    };

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
                            to="/login"
                            className="rounded-md bg-[#666666] px-2 py-1 text-xs text-white"
                        >
                            وارد شوید
                        </Link>
                    </div>
                    <form
                        action="#"
                        className="flex flex-col gap-4"
                        onSubmit={(e) => RegisterUserHandler(e)}
                    >
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="text"
                                id="name"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="نام و نام خانوادگی"
                                elem="input"
                                validations={[
                                    requiredValidator(),
                                    minValidator(6),
                                    maxValidator(20),
                                ]}
                                onInputHandler={onInputHandler}
                            />
                            <FaUserEdit className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="text"
                                id="username"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="نام کاربری"
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
                                type="text"
                                id="email"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="آدرس ایمیل"
                                elem="input"
                                validations={[emailValidator()]}
                                onInputHandler={onInputHandler}
                            />
                            <FaEnvelope className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
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
                                    maxValidator(20),
                                ]}
                                onInputHandler={onInputHandler}
                            />
                            <FaLockOpen className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="password"
                                id="confirmPassword"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="تکرار رمز عبور"
                                elem="input"
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(20),
                                    confirmPassValidator(formState.inputs.password.value),
                                ]}
                                onInputHandler={onInputHandler}
                            />
                            <FaLockOpen className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="text"
                                id="phone"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="شماره تلفن همراه"
                                elem="input"
                                validations={[phoneNumberValidator()]}
                                onInputHandler={onInputHandler}
                            />
                            <FaLockOpen className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <Button
                            className="relative flex items-center justify-center rounded-md bg-primary-color p-2.5 text-white disabled:opacity-70"
                            type="submit"
                            disabled={!formState.isFormValid}
                        >
                            عضویت
                            <FaUserPlus className="absolute bottom-0 right-2.5 top-0 m-auto text-xl" />
                        </Button>
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
