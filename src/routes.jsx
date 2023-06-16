import Home from "./pages/Home";
import ArticleInfo from "./pages/ArticleInfo";
import Category from "./pages/Category";
import CourseInfo from "./pages/CourseInfo";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/courses/:page", element: <Courses /> },
    { path: "/article-info/:articleName", element: <ArticleInfo /> },
    { path: "/category-info/:categoryName/:page", element: <Category /> },
    { path: "/course-info/:courseName", element: <CourseInfo /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <NotFound /> },
];

export default routes;
