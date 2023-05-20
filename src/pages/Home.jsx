import AboutUs from "../components/HomePage/AboutUs";
import ArticleBoxes from "../components/HomePage/ArticleBoxes";
import Landing from "../components/HomePage/Landing";
import LatestCourses from "../components/HomePage/LatestCourses";
import PopularCourses from "../components/HomePage/PopularCourses";
import PreSaleCourses from "../components/HomePage/PreSaleCourses";

const Home = () => {
    return (
        <>
            <Landing />
            <LatestCourses />
            <AboutUs />
            <PopularCourses />
            <PreSaleCourses />
            <ArticleBoxes />
        </>
    );
};

export default Home;
