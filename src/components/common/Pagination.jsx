import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

const Pagination = ({ items, itemsCount, pathname, setPaginatedItems }) => {
    const [pageCount, setPageCount] = useState(null);
    const { page } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let endIndex = itemsCount * page;
        let startIndex = endIndex - itemsCount;
        setPaginatedItems(items.slice(startIndex, endIndex));
        setPageCount(Math.ceil(items.length / itemsCount));
    }, [page, items, pageCount, setPaginatedItems, itemsCount]);

    return (
        <div className="mt-10 flex w-full items-center justify-center gap-2">
            <button
                className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f0f0f1] text-dark-color duration-300 hover:bg-primary-color hover:text-white disabled:text-gray-300 disabled:hover:bg-[#f0f0f1] disabled:hover:text-gray-300"
                disabled={Number(page) === 1}
                onClick={() => navigate(`${pathname}/${Number(page) - 1}`)}
            >
                <FaArrowRight />
            </button>
            <ul className="flex items-center justify-center gap-2">
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => (
                    <Button
                        to={`${pathname}/${item}`}
                        key={item}
                        className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md  duration-300 hover:bg-primary-color hover:text-white ${
                            item === Number(page)
                                ? "bg-primary-color text-white"
                                : "bg-[#f0f0f1] text-dark-color"
                        }`}
                    >
                        {item}
                    </Button>
                ))}
            </ul>
            <button
                className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f0f0f1] text-dark-color duration-300 hover:bg-primary-color hover:text-white disabled:text-gray-300 disabled:hover:bg-[#f0f0f1] disabled:hover:text-gray-300"
                disabled={Number(page) === pageCount}
                onClick={() => navigate(`${pathname}/${Number(page) + 1}`)}
            >
                <FaArrowLeft />
            </button>
        </div>
    );
};

export default Pagination;
