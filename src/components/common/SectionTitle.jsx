const SectionTitle = ({ title, caption }) => {
    return (
        <div className="flex justify-center items-start flex-col">
            <span className="font-IRANSans-Medium text-2xl relative text-[#444446] after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-full after:max-w-6xl after:h-3/5 after:bg-[rgba(43,206,86,0.2)] before:content-[''] before:absolute before:right-[-1rem] before:w-1 before:h-14 before:bg-primary-color before:rounded-full before:rotate-6">
                {title}
            </span>
            {caption && <span className="text-md text-[#9c9c9c]">{caption}</span>}
        </div>
    );
};

export default SectionTitle;
