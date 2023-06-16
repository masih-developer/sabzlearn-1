import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/common/Header/Header";
import SidebarProvider from "./context/SidebarProvider";
import Footer from "./components/common/Footer";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
const App = () => {
    const router = useRoutes(routes);

    return (
        <>
            <AuthProvider>
                <SidebarProvider>
                    <ScrollToTop>
                        <Header />
                        <Toaster position="top-center" reverseOrder={false} />
                        <main>{router}</main>
                        <Footer />
                    </ScrollToTop>
                </SidebarProvider>
            </AuthProvider>
        </>
    );
};

export default App;
