const SectionTitle = ({ title, caption }) => {
    return (
        <div className="flex flex-col items-start justify-center">
            <span
                className={`relative font-IRANSans-Medium text-2xl text-[#444446] before:absolute before:right-[-1rem] ${
                    caption ? "before:h-14" : "before:h-full"
                } before:w-1 before:rotate-6 before:rounded-full before:bg-primary-color before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-3/5 after:w-full after:max-w-6xl after:bg-[rgba(43,206,86,0.2)] after:content-['']`}
            >
                {title}
            </span>
            {caption && <span className="mt-1 text-md text-[#9c9c9c]">{caption}</span>}
        </div>
    );
};

export default SectionTitle;
