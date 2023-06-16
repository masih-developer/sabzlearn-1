import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
        authContext.checkIsLoggedInUser();
    }, [pathname]);

    return children;
};

export default ScrollToTop;
