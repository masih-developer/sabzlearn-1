import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    return (
        <SidebarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
