import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const items = [
    { id: 1, title: "آموزش Html", path: "/" },
    { id: 2, title: "آموزش Css", path: "/" },
    { id: 3, title: "آموزش Js", path: "/" },
    { id: 4, title: "آموزش Bootstrap", path: "/" },
    { id: 5, title: "آموزش Python", path: "/" },
    { id: 6, title: "آموزش React js", path: "/" },
    { id: 7, title: "20,000 تومان", path: "/" },
];
const TopBar = () => {
    return (
        <div className="hidden lg:flex flex-wrap items-center justify-between bg-grey-color p-5">
            <ul className="flex items-center justify-center gap-4 xl:gap-5">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.path}
                            className="text-md text-dark-color hover:text-blue-hover transition-colors"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center-justify-center gap-5 mr-auto lg:mr-0">
                <div className="flex items-center justify-center gap-1">
                    <Link
                        to="/"
                        className="text-md text-dark-color hover:text-blue-hover transition-colors"
                    >
                        sabzlearn@gmail.com
                    </Link>
                    <FaEnvelope className="text-xl text-primary-color" />
                </div>
                <div className="flex items-center justify-center gap-1">
                    <Link
                        to="/"
                        className="text-md text-dark-color hover:text-blue-hover transition-colors"
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
