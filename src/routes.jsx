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
    { path: "*", element: <NotFound /> },
];

export default routes;
