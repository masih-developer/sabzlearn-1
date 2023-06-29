import { useDropzone } from "React-dropzone";

const DropZone = () => {
    const { getRootProps, getInputProps, isDragActive, isDragAccept, acceptedFiles } = useDropzone(
        {}
    );

    return (
        <div
            {...getRootProps()}
            className={`flex min-h-[120px] w-full items-center justify-center rounded-md border border-dashed ${
                acceptedFiles.length ? "border-green-500" : "border-red-500"
            }`}
        >
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center">
                <p className="dropzone-content text-dark-color">
                    {!isDragAccept && !isDragActive && !acceptedFiles.length
                        ? "عکس محصول مورد نظر را آپلود کنید."
                        : null}
                    {isDragActive && "درحال آپلود عکس..."}
                    {acceptedFiles.length ? "عکس با موفقیت آپلود شد." : null}
                </p>
                {acceptedFiles.length ? (
                    <ul className="mt-5">
                        {acceptedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </div>
    );
};

export default DropZone;
