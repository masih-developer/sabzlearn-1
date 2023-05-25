import { useState, useLayoutEffect, useRef } from "react";
import { TfiAngleDown } from "react-icons/tfi";

const AccordionItem = ({ title, content, onClick, isActive }) => {
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(isActive ? accordionContent.current.scrollHeight : 0);
    }, [isActive]);

    const accordionContent = useRef(null);

    return (
        <div className="rounded-sm border border-[#dee2e6]">
            <button
                className="flex w-full items-center justify-between border-b border-b-[#dee2e6] bg-[#f7f9fa] p-3 text-right"
                onClick={onClick}
            >
                {title}
                <TfiAngleDown className={`text-sm duration-300 ${isActive ? "rotate-180" : ""}`} />
            </button>
            <div
                className={`overflow-hidden bg-[#f7f9fa] duration-300`}
                style={{ maxHeight: `${height}px` }}
                ref={accordionContent}
            >
                <div className="p-3">{content}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
