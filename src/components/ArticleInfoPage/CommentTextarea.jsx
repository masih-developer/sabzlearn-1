import { Link } from "react-router-dom";

const CommentTextarea = () => {
    return (
        <div>
            <span className="block text-xs">دیدگاهتان را بنویسید</span>
            <span className="my-5 block text-dark-color">
                <Link to="/" className="duration-300 hover:text-blue-hover">
                    با عنوان محمدامین سعیدی راد وارد شده اید.
                </Link>
                <Link to="/" className="duration-300 hover:text-blue-hover">
                    خارج میشوید؟
                </Link>
                بخش های مورد نیاز علامت گذاری شده اند *
            </span>
            <form action="" className="" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="opinion" className="text-md text-[#6c757d]">
                        دیدگاه *
                    </label>
                    <textarea
                        name=""
                        id="opinion"
                        className="mb-5 h-40 min-h-[66px] resize-y rounded-lg border border-[#dcdcdc] p-5 text-dark-color outline-0"
                    ></textarea>
                </div>
                <button className="app-btn">فرستادن دیدگاه</button>
            </form>
        </div>
    );
};

export default CommentTextarea;
