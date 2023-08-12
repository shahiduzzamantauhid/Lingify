import { Helmet } from "react-helmet";
import PageToper from "../../Shares/PageToper";
import AboutInstrahhctor from "./AboutInstrahhctor";

const Instractor = () => {
    return (
        <div>
            <Helmet><title>Instractor | Lingify</title></Helmet>
            <PageToper pageName={"mr. Rashed Islam"} pageUrl={"Username"} prePageName={"Instractors"} />
            <AboutInstrahhctor />
        </div>
    );
};

export default Instractor;