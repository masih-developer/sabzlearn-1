import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const TopBar = () => {
    const [allLinks, setAllLinks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/menus/topbar")
            .then((res) => res.json())
            .then((result) => {
                setAllLinks(result);
            });
    }, []);

    const getRandomItemsFromArray = (arr, randomCount) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, randomCount);
    };

    return (
        <div className="hidden flex-wrap items-center justify-between gap-3 bg-grey-color p-5 lg:flex">
            <ul className="flex items-center justify-center gap-4 xl:gap-5">
                {getRandomItemsFromArray(allLinks, 5).map((item) => (
                    <li key={item._id}>
                        <Link
                            to={item.href}
                            className="text-md text-dark-color transition-colors hover:text-blue-hover"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="items-center-justify-center mr-auto flex gap-5">
                <div className="flex items-center justify-center gap-1">
                    <Link
                        to="/"
                        className="text-md text-dark-color transition-colors hover:text-blue-hover"
                    >
                        sabzlearn@gmail.com
                    </Link>
                    <FaEnvelope className="text-xl text-primary-color" />
                </div>
                <div className="flex items-center justify-center gap-1">
                    <Link
                        to="/"
                        className="text-md text-dark-color transition-colors hover:text-blue-hover"
                    >
                        09921558293
                    </Link>
                    <FaPhoneAlt className="text-xl text-primary-color" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
