const DataTable = ({ title, children, className }) => {
    return (
        <div
            className={`w-full rounded-lg p-5 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.1)] ${className}`}
        >
            <h3 className="mb-5 font-IRANSans-Medium text-lg text-dark-color">
                لیست <span className="font-IRANSans-Bold text-blue-800">{title}</span>
            </h3>
            <div>{children}</div>
        </div>
    );
};

export default DataTable;
