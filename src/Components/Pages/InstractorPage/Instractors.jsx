import { Helmet } from "react-helmet";
import PageToper from "../../Shares/PageToper";
import { Link } from "react-router-dom";

const Instractors = () => {
    return (
        <>
            <Helmet>
            <title>Instractors | Lingify</title>
        </Helmet>
        <PageToper pageName={"Instructors"}> </PageToper>
        <div className="w-10/12 mx-auto my-20">
        <div className="grid grid-cols-3 justify-between items-center gap-4">
        <div className="shadow-md relative hover:-translate-y-11 duration-500">
          <div className="flex absolute top-4">
            <div className="px-4 py-2 bg-primary font-semibold text-xl"><h5>Class no: 01</h5></div> </div>
            <img
            className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/03/h-75-453x453.jpg"
              alt=""
            />
            <div className="p-4 h-40">
              <h3 className="font-bold text-3xl pb-2">Michael C. Johnson</h3>
              <p className="text-xl">Email: demo@gmail.com</p>
            
              <div className="grid grid-cols-5 gap-4 text-lg">
                <div>CName:</div>
                <div className="col-span-4">English Level B1</div>
              </div>
            </div>
            <div className= "text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
              <Link to="/instractors/username" className="text-2xl w-full mt-4">
                See All Classes
              </Link>
            </div>
          </div>
          <div className="shadow-md relative hover:-translate-y-11 duration-500">
          <div className="flex absolute top-4">
            <div className="px-4 py-2 bg-primary font-semibold text-xl"><h5>Class no: 01</h5></div> </div>
            <img
            className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/03/h-75-453x453.jpg"
              alt=""
            />
            <div className="p-4 h-40">
              <h3 className="font-bold text-3xl pb-2">Michael C. Johnson</h3>
              <p className="text-xl">Email: demo@gmail.com</p>
            
              <div className="grid grid-cols-5 gap-4 text-lg">
                <div>CName:</div>
                <div className="col-span-4">English Level B1</div>
              </div>
            </div>
            <div className= "text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
            <Link to="/instractors/username" className="text-2xl w-full mt-4">
                See All Classes
              </Link>
            </div>
          </div>
          <div className="shadow-md relative hover:-translate-y-11 duration-500">
          <div className="flex absolute top-4">
            <div className="px-4 py-2 bg-primary font-semibold text-xl"><h5>Class no: 01</h5></div> </div>
            <img
            className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/03/h-75-453x453.jpg"
              alt=""
            />
            <div className="p-4 h-40">
              <h3 className="font-bold text-3xl pb-2">Michael C. Johnson</h3>
              <p className="text-xl">Email: demo@gmail.com</p>
            
              <div className="grid grid-cols-5 gap-4 text-lg">
                <div>CName:</div>
                <div className="col-span-4">English Level B1</div>
              </div>
            </div>
            <div className= "text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
            <Link to="/instractors/username" className="text-2xl w-full mt-4">
                See All Classes
              </Link>
            </div>
          </div>
          
          
        </div>
      </div>
        </>
    );
};

export default Instractors;