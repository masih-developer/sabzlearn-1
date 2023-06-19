import AppInput from "../components/common/AppInput";
import {
    emailValidator,
    maxValidator,
    minValidator,
    phoneNumberValidator,
    requiredValidator,
} from "../validators/rules";
import { FaLockOpen, FaUser } from "react-icons/fa";
import Button from "../components/common/Button";
import { CgLogIn } from "react-icons/cg";
import useForm from "../hooks/useForm";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
    const [formState, onInputHandler] = useForm(
        {
            fullname: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
        },
        false
    );
    const [isLoadingLogginBtn, setIsLoadingLogginBtn] = useState(false);

    const userLoginHandler = (e) => {
        e.preventDefault();
        const contactInfo = {
            name: formState.inputs.fullname.value,
            email: formState.inputs.email.value,
            phone: formState.inputs.phone.value,
            body: formState.inputs.textarea.value,
        };
        setIsLoadingLogginBtn(true);

        const sendContactHandler = async () => {
            try {
                await fetch("http://localhost:4000/v1/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactInfo),
                });
            } catch (err) {
                throw new Error(err); // Throw the error to be caught by the promise
            } finally {
                setIsLoadingLogginBtn(false);
            }
        };

        toast.promise(sendContactHandler(), {
            loading: "درحال ارسال انتقاد شما...",
            success: "انتقاد شما با موفقیت انجام شد.",
            error: "ارسال انتقاد شما با خطا مواجه شد.",
        });
    };

    return (
        <div className="mt-20 lg:mt-10">
            <div className="container">
                <div className="mx-auto w-[500px] max-w-full rounded-md border-b-4 border-b-primary-color px-5 py-7 shadow-[0_0_19px_rgba(168,172,185,0.3)]">
                    <h3 className="mb-1 text-center font-IRANSans-Medium text-lg text-dark-color">
                        ارتباط با ما
                    </h3>
                    <span className="mx-auto mb-5 block w-fit text-center text-sm text-dark-color">
                        نظر یا انتقادتو بنوسی برامون :)
                    </span>
                    <form
                        action="#"
                        className="flex flex-col gap-4"
                        onSubmit={(e) => userLoginHandler(e)}
                    >
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="text"
                                id="fullname"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="نام و نام خانوادگی"
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
                            <FaLockOpen className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="text"
                                id="phone"
                                className="w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="شماره تماس"
                                elem="input"
                                validations={[phoneNumberValidator()]}
                                onInputHandler={onInputHandler}
                            />
                            <FaLockOpen className="absolute bottom-0 left-2 top-0 m-auto shrink-0 text-xl text-[#8d8d8d]" />
                        </div>
                        <div className="relative flex items-center justify-between">
                            <AppInput
                                type="text"
                                elem="textarea"
                                id="textarea"
                                className="min-h-[100px] w-full rounded-md border border-[#dcdcdc] p-2 pl-10 text-md text-dark-color outline-0 placeholder:text-sm"
                                placeholder="متن خود را وارد کنید..."
                                validations={[requiredValidator()]}
                                onInputHandler={onInputHandler}
                            />
                        </div>
                        <Button
                            className="relative flex items-center justify-center rounded-md bg-primary-color p-2.5 text-white disabled:opacity-70"
                            type="submit"
                            disabled={!formState.isFormValid}
                        >
                            {isLoadingLogginBtn ? (
                                <span className="block h-6 w-6 animate-spin rounded-full border-[3px] border-green-100 border-t-primary-color"></span>
                            ) : (
                                "ورود"
                            )}
                            <CgLogIn className="absolute bottom-0 right-2.5 top-0 m-auto text-xl" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
