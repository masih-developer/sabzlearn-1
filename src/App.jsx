import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/common/Header/Header";
import SidebarProvider from "./context/SidebarProvider";
import Footer from "./components/common/Footer";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
import { useEffect, useState } from "react";
const App = () => {
    const router = useRoutes(routes);
    const [showComponents, setShowComponents] = useState(true);

    const { pathname } = useLocation();

    useEffect(() => {
        setShowComponents(!pathname.includes("p-admin"));
    }, [pathname]);

    return (
        <>
            <AuthProvider>
                <SidebarProvider>
                    <ScrollToTop>
                        {showComponents ? (
                            <>
                                <Header />
                                <Toaster position="top-center" reverseOrder={false} />
                                <main>{router}</main>
                                <Footer />
                            </>
                        ) : (
                            <>
                                <Toaster position="top-center" reverseOrder={false} />
                                <main>{router}</main>
                            </>
                        )}
                    </ScrollToTop>
                </SidebarProvider>
            </AuthProvider>
        </>
    );
};

export default App;
