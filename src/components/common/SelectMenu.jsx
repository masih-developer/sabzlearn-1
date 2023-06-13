import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const SelectMenu = ({ items, className, onChange }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [sortingCategoryBy, setSortingCategoryBy] = useState(items[0]);

    const onClickHandler = (item) => {
        setSortingCategoryBy(item);
        setIsOpenMenu(false);
        onChange({ item, isValid: item === items[0] ? false : true });
    };

    return (
        <div className={`relative flex flex-col rounded-md bg-white text-[#7d7e7f] ${className}`}>
            <button
                className="flex cursor-pointer items-center justify-between gap-1 p-2"
                onClick={() => setIsOpenMenu((prev) => !prev)}
            >
                {sortingCategoryBy}
                <FaAngleDown className={`text-lg duration-300 ${isOpenMenu ? "rotate-180" : ""}`} />
            </button>
            <ul
                className={`${
                    isOpenMenu ? "block" : "hidden"
                } absolute right-0 top-full z-10 w-full overflow-hidden rounded-b-md border-b-2 border-b-primary-color bg-white shadow-[0_0_6px_rgba(0,0,0,0.2)]`}
            >
                {items.map((item) => (
                    <li
                        key={item}
                        className="cursor-pointer p-2 text-dark-color duration-300 hover:bg-[#dddddd]"
                        onClick={() => {
                            onClickHandler(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectMenu;
