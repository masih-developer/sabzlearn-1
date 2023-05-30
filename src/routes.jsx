import Home from "./pages/Home";
import ArticleInfo from "./pages/ArticleInfo";
import Category from "./pages/Category";
import CourseInfo from "./pages/CourseInfo";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/courses", element: <Courses /> },
    { path: "/article-info/:articleName", element: <ArticleInfo /> },
    { path: "/category-info/:categoryName", element: <Category /> },
    { path: "/course-info/:courseName", element: <CourseInfo /> },
    { path: "*", element: <NotFound /> },
];

export default routes;
