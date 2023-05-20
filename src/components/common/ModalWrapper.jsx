import { useEffect } from "react";
import { createPortal } from "react-dom";

const ModalWrapper = ({ isShow, onClose }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("moodal-wrapper")) {
            onClose();
        }
    };

    useEffect(() => {
        if (isShow) {
            window.addEventListener("click", handleClick);
        }
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [isShow]);

    return createPortal(
        <div className={`moodal-wrapper${isShow ? " moodal-wrapper--active" : ""}`}></div>,
        document.body
    );
};

export default ModalWrapper;
