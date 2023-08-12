import { Link } from "react-router-dom";

const PageToper = ({ pageName, pageUrl, prePageName }) => {
  return (
    <div className="bg-[url('assets/Images/testimonials-bg.webp')] bg-center bg-cover bg-no-repeat">
      <div className="py-8 backdrop-blur-3xl">
        <div className="w-3/6 mx-auto p-12">
          <h2 className="text-center text-6xl font-bold mb-8 text-white uppercase">
            {pageName}
          </h2>
          <h2 className="text-center text-xl text-base-100">
            <Link className="text-base-100" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link to={prePageName ? `/${prePageName}` : ""}>{prePageName ? `${prePageName} /` : ""}</Link>{" "}
            <Link to={pageUrl ? `/${pageUrl}` : `${pageName}`} className="text-primary">{pageUrl? `${pageUrl}`: `${pageName}`}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageToper;
