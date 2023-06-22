import Home from "./pages/Home";
import ArticleInfo from "./pages/ArticleInfo";
import Category from "./pages/Category";
import CourseInfo from "./pages/CourseInfo";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import AdminPanel from "./pages/AdminPanel/index";
import Users from "./pages/AdminPanel/Users";
import AdminPanelCourses from "./pages/AdminPanel/Courses";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/courses/:page", element: <Courses /> },
    { path: "/articles/:page", element: <Articles /> },
    { path: "/article-info/:articleName", element: <ArticleInfo /> },
    { path: "/category-info/:categoryName/:page", element: <Category /> },
    { path: "/course-info/:courseName", element: <CourseInfo /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/contact", element: <Contact /> },
    { path: "/search/:value", element: <Search /> },
    { path: "*", element: <NotFound /> },
    {
        path: "/p-admin/*",
        element: <AdminPanel />,
        children: [
            { path: "users", element: <Users /> },
            { path: "courses", element: <AdminPanelCourses /> },
        ],
    },
];

export default routes;
