import { useEffect, useState } from "react";
import DataTable from "../../components/AdminPanel/DataTable";
import Button from "../../components/common/Button";
import ReactModal from "react-modal";
import { toast } from "react-hot-toast";

const Contacts = () => {
    const [messages, setMessages] = useState([]);
    const [isShowMessageModal, setIsShowMessageModal] = useState(false);
    const [isShowAnswerModal, setIsShowAnswerModal] = useState(false);
    const [answerInputValue, setAnswerInputValue] = useState("");
    const [mainUserEmail, setMainUserEmail] = useState("");
    const [mainMessage, setMainMessage] = useState("");

    useEffect(() => {
        getAllMesseagesHandler();
    }, []);

    const getAllMesseagesHandler = () => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch("http://localhost:4000/v1/contact", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorageData.token}`,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                setMessages(result);
            });
    };

    const removeMessageHandler = (message) => {
        toast(
            () => (
                <div className="flex flex-col gap-2">
                    <span>
                        آیا از <span className="font-IRANSans-Bold text-black">حذف</span> این پیغام
                        مطمئن هستید؟
                    </span>
                    <div className="flex w-full items-center justify-center gap-3">
                        <button
                            className="flex items-center justify-center rounded-md border-2 border-red-500 px-5 py-1 text-red-500"
                            onClick={() => {
                                toast.dismiss();
                                removeHandler();
                            }}
                        >
                            بله
                        </button>
                        <button
                            className="rounded-md border-2 border-blue-500 bg-blue-500 px-5 py-1 text-white"
                            onClick={() => toast.dismiss()}
                        >
                            خیر
                        </button>
                    </div>
                </div>
            ),
            { duration: 5000 }
        );

        const removeHandler = () => {
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            const toastID = toast.loading("درحال حذف پیغام...");
            fetch(`http://localhost:4000/v1/contact/${message._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorageData.token}`,
                },
            })
                .then(async (res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    const errorText = await res.text();
                    throw new Error(errorText);
                })
                .then(() => {
                    toast.success("پیغام با موفقیت حذف شد.", { id: toastID });
                    getAllMesseagesHandler();
                })
                .catch((err) => {
                    if (err.message) {
                        toast.error(JSON.parse(err.message).message, { id: toastID });
                        return;
                    }
                    toast.error("انجام عملیات با خطا مواجه شد.", { id: toastID });
                });
        };
    };

    const sendAnswerHandler = () => {
        if (answerInputValue.trim()) {
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            const userInfo = { email: mainUserEmail, answer: answerInputValue.trim() };
            const toastID = toast.loading("درحال ارسال پاسخ...");
            fetch("http://localhost:4000/v1/contact/answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorageData.token}`,
                },
                body: JSON.stringify(userInfo),
            })
                .then(async (res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    const errorText = await res.text();
                    throw new Error(errorText);
                })
                .then(() => {
                    toast.success("ارسال پاسخ با موفقیت انجام شد.", { id: toastID });
                })
                .catch((err) => {
                    if (err.message) {
                        toast.error(JSON.parse(err.message).message, { id: toastID });
                        return;
                    }
                    toast.error("ارسال پاسخ با خطا مواجه شد.", { id: toastID });
                });
        }
    };

    return (
        <div>
            <DataTable title="دوره ها" className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-50 py-3">
                            <th className="whitespace-nowrap p-2 text-md">شناسه</th>
                            <th className="whitespace-nowrap p-2 text-md">نام و نام خانوادگی</th>
                            <th className="whitespace-nowrap p-2 text-md">ایمیل</th>
                            <th className="whitespace-nowrap p-2 text-md">شماره تماس</th>
                            <th className="whitespace-nowrap p-2 text-md">مشاهده</th>
                            <th className="whitespace-nowrap p-2 text-md">پاسخ</th>
                            <th className="whitespace-nowrap p-2 text-md">حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((message, index) => (
                            <tr key={message._id}>
                                <th className="whitespace-nowrap p-3 text-sm">{index + 1}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{message.name}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{message.email}</th>
                                <th className="whitespace-nowrap p-3 text-sm">{message.phone}</th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-blue-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => {
                                            setMainMessage(message.body);
                                            setIsShowMessageModal(true);
                                        }}
                                    >
                                        مشاهده پیغام
                                    </Button>
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-blue-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => {
                                            setMainUserEmail(message.email);
                                            setIsShowAnswerModal(true);
                                        }}
                                    >
                                        پاسخ
                                    </Button>
                                </th>
                                <th className="whitespace-nowrap p-3 text-sm">
                                    <Button
                                        className="rounded-md bg-red-500 px-3 py-2 font-IRANSans text-sm text-white"
                                        onclick={() => removeMessageHandler(message)}
                                    >
                                        حذف
                                    </Button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DataTable>
            <ReactModal
                appElement={document.body}
                isOpen={isShowMessageModal}
                contentLabel="Modal #1 Global Style Override Example"
                onRequestClose={() => setIsShowMessageModal(false)}
            >
                <div className="flex w-96 max-w-full flex-col items-start justify-center gap-5 rounded-md p-5">
                    <p>{mainMessage}</p>
                    <Button
                        className="mx-auto w-fit rounded-md bg-blue-hover px-4 py-2 text-white"
                        onclick={() => setIsShowMessageModal(false)}
                    >
                        بستن
                    </Button>
                </div>
            </ReactModal>
            <ReactModal
                appElement={document.body}
                isOpen={isShowAnswerModal}
                contentLabel="Modal #1 Global Style Override Example"
                onRequestClose={() => setIsShowAnswerModal(false)}
            >
                <div className="flex w-96 max-w-full flex-col items-start justify-center gap-5 rounded-md p-5">
                    <textarea
                        placeholder="متن پاسخ خود را بنویسید"
                        value={answerInputValue}
                        onChange={(e) => setAnswerInputValue(e.target.value)}
                        className={`h-32 min-h-[40px] w-full resize-y rounded-md border ${
                            answerInputValue.trim() ? "border-green-500" : "border-red-500"
                        } p-2 outline-0`}
                    ></textarea>
                    <Button
                        className="mx-auto w-fit rounded-md bg-blue-hover px-4 py-2 text-white disabled:opacity-70"
                        onclick={() => {
                            setIsShowAnswerModal(false);
                            sendAnswerHandler();
                        }}
                        disabled={!answerInputValue.trim()}
                    >
                        ارسال
                    </Button>
                </div>
            </ReactModal>
        </div>
    );
};

export default Contacts;
