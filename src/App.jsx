import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/common/Header/Header";
import SidebarProvider from "./context/SidebarProvider";
import Footer from "./components/common/Footer";

const App = () => {
    const router = useRoutes(routes);

    return (
        <>
            <SidebarProvider>
                <Header />
                <main>{router}</main>
                <Footer />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </SidebarProvider>
        </>
    );
};

export default App;
