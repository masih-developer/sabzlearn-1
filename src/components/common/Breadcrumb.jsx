import { FaHome, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumb = ({ links }) => {
    return (
        <div className="mt-5 flex items-center gap-4 rounded-lg bg-[#f0f2f7] p-4">
            <div className="flex items-center justify-center rounded-lg bg-white p-2 text-[#909aa7]">
                <FaHome className="text-lg md:text-2xl " />
            </div>
            <ul className="flex flex-wrap items-center gap-1">
                {links.map((item, index) => (
                    <li className="flex items-center gap-1" key={item.id}>
                        <Link
                            to={item.path}
                            className="text-sm text-[#7f8187] duration-300 hover:text-blue-hover md:text-base"
                        >
                            {item.title}
                        </Link>
                        {index !== links.length - 1 && <FaAngleLeft className="text-[#7f8187]" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumb;
