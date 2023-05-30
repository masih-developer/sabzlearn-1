const ArticleInfoBox = ({ title, children }) => {
    return (
        <div className="overflow-hidden rounded-lg p-5 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)]">
            <div className="">
                <h4 className="relative mb-5 block text-lg before:absolute before:right-[-25px] before:top-[-5px] before:h-10 before:w-5 before:skew-x-[-10deg] before:rounded-bl-lg before:rounded-tl-lg before:bg-primary-color before:content-['']">
                    {title}
                </h4>
                <div className="">{children}</div>
            </div>
        </div>
    );
};

export default ArticleInfoBox;
