import { Helmet } from "react-helmet";
import PageToper from "../../Shares/PageToper";

const singleCourse = () => {
    return (
        <>
            <Helmet>
                <title>Course | Lingify</title>
            </Helmet>
            <PageToper
                pageName="IELTS Level B1"
                prePageName="Courses"
                pageUrl="Course"
            />
        </>
    );
};

export default singleCourse;