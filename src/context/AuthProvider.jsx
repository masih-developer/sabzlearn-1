import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userInfos: {},
    login: () => {},
    logout: () => {},
});

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [userInfos, setUserInfos] = useState({});

    const login = useCallback((token) => {
        setToken(token);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify({ token }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserInfos({});
        setIsLoggedIn(false);
        localStorage.removeItem("user");
    }, []);

    const checkLocalStorageUser = () => {
        const localStorageUserData = JSON.parse(localStorage.getItem("user"));
        if (localStorageUserData) {
            fetch("http://localhost:4000/v1/auth/me", {
                headers: {
                    Authorization: `Bearer ${localStorageUserData.token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsLoggedIn(true);
                    setUserInfos(data);
                });
        }
    };

    useEffect(() => {
        checkLocalStorageUser();
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, userInfos, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
