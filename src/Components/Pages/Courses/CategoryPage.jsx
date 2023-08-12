import { Helmet } from "react-helmet";
import PageToper from "../../Shares/PageToper";
import { Link } from "react-router-dom";

const CategoryPage = () => {
    return (
        <div>
            <Helmet>
                <title>Course Category | Lingify</title>
            </Helmet>
            <PageToper
                pageName="English Courses"
                prePageName="Courses"
                currentPage="Category"
            />
            <div className="w-10/12 mx-auto">
        <div className="lg:w-4/6 mx-auto">
          <h2 className="text-center text-5xl font-bold mt-40 mb-8">
            Scale Up Your English Skill
          </h2>
          <h2 className="text-center text-xl mb-16">
            Our interactive teaching method engages you in the learning process
            so that you learn communication skills and develop confidence
            quickly.
          </h2>
        </div>
        <div className="lg:grid grid-cols-3 justify-between items-center gap-4">
          <div className="mt-12 shadow-md relative hover:-translate-y-11 duration-500">
            <div className="flex absolute top-4">
              <div className="px-4 py-2 bg-primary font-semibold text-xl">
                <h5>From $100.00</h5>
              </div>{" "}
            </div>
            <img
              className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/03/h-75-453x453.jpg"
              alt=""
            />
            <div className="p-4 pt-3 lg:h-40">
              <h3 className="font-bold text-3xl pb-3">
                Online Course Level B1
              </h3>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Start Date</div>
                <div className=" h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right"> Starts Now</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Course Length</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">54 mins</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Lession Times</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">00:00 - 24:00</div>
              </div>
            </div>
            <div className="text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
              <Link to="/course" className="text-2xl w-full mt-4">
                Read More
              </Link>
            </div>
          </div>
          <div className="shadow-md relative hover:-translate-y-11 duration-500 mt-12">
            <div className="flex absolute top-4">
              <div className="px-4 py-2 bg-primary font-semibold text-xl">
                <h5>From $100.00</h5>
              </div>{" "}
            </div>
            <img className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-2-453x453.jpg"
              alt=""
            />

            <div className="p-4 pt-3 lg:h-40">
              <h3 className="font-bold text-3xl pb-3">
                Online Course Level B1
              </h3>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Start Date</div>
                <div className=" h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right"> Starts Now</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Course Length</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">54 mins</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Lession Times</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">00:00 - 24:00</div>
              </div>
            </div>
            <div className="text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
              <a href="#" className="text-2xl w-full mt-4">
                Read More
              </a>
            </div>
          </div>
          <div className="shadow-md relative hover:-translate-y-11  duration-500 mt-12">
            <div className="flex absolute top-4">
              <div className="px-4 py-2 bg-primary font-semibold text-xl">
                <h5>From $100.00</h5>
              </div>{" "}
            </div>
            <img className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
              alt=""
            />
            <div className="p-4 pt-3 lg:h-40">
              <h3 className="font-bold text-3xl pb-3">
                Online Course Level B1
              </h3>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Start Date</div>
                <div className=" h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right"> Starts Now</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Course Length</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">54 mins</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Lession Times</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">00:00 - 24:00</div>
              </div>
            </div>
            <div className="text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
              <a href="#" className="text-2xl w-full mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CategoryPage;