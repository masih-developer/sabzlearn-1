import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    function handleClick(index) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div className="flex w-full flex-col gap-4">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isActive={activeIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
