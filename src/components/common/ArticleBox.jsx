import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleBox = ({ shortName, cover, title, description, hoverEffect }) => {
    return (
        <div
            className={`flex h-full select-none flex-col justify-between overflow-hidden rounded-lg shadow-[0_5px_30px_rgba(70,72,77,0.08)] ${
                hoverEffect ? "duration-300 hover:-translate-y-2" : null
            }`}
        >
            <Link to={`/article-info/${shortName}`} className="block w-full">
                <img
                    src={`http://localhost:4000/courses/covers/${cover}`}
                    alt=""
                    className="w-full"
                />
            </Link>
            <div className="px-5 py-6">
                <Link to={`/article-info/${shortName}`}>
                    <h3 className="font-IRANSans-Bold text-dark-color duration-300 hover:text-blue-hover">
                        {title}
                    </h3>
                </Link>
                <p className="mt-2 text-xs text-[#898989]">{description}</p>
                <Button
                    to={`/article-info/${shortName}`}
                    className="mt-5 flex w-fit items-center justify-center rounded-md border-2 border-primary-color p-1.5 text-sm text-primary-color duration-300 hover:bg-primary-color hover:text-white"
                >
                    بیشتر بخوانید
                </Button>
            </div>
        </div>
    );
};

export default ArticleBox;
