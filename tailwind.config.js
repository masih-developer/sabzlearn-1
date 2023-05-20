/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
                "2xl": "1320px",
            },
        },
        fontFamily: {
            IRANSans: "IRANSans",
            "IRANSans-Medium": "IRANSans-Medium",
            "IRANSans-Bold": "IRANSans-Bold",
        },
        // extends
        extend: {
            fontSize: {
                md: "0.9375rem",
            },
            colors: {
                "primary-color": "#2bce56",
                "dark-color": "#464749",
                "blue-hover": "#1e83f0",
                "grey-color": "#f0f2f7",
            },
        },
    },
    plugins: [],
};
