
import { Link } from "react-router-dom";

const Classes = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto my-20">
        <h2 className="text-center text-5xl font-bold mb-6"> Learn a Foreign Language to Speak to the World</h2>
        <p className="text-center text-xl w-3/6 mb-6 mx-auto">We offer modern language courses in Arabic, French, German, Italian, Japanese, Mandarin and Portuguese.
</p>
        <div className="lg:grid grid-cols-3 gap-4">
          
          <div className="shadow-md relative hover:-translate-y-11 duration-500 mt-12">
          <div className="flex absolute top-4"><div className="px-4 py-1 bg-secondary text-white"><h5>Intermediate</h5></div> <div className="px-2 py-1 bg-primary font-semibold"><p>B1</p></div></div>
            <img className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-2-453x453.jpg"
              alt=""
            />
            
            <div className="p-4 pt-3 h-40">
              <h3 className="font-bold text-3xl pb-3">Portuguese</h3>
              <p>
              If you have a solid grasp of elementary level vocabulary and grammar, our pre-intermediate courses are a great continuation. 
              </p>
            </div>
            <div className= "text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
              <Link to="/category" href="#" className="text-2xl w-full mt-4">
                Read More
              </Link>
            </div>
          </div>
          <div  className="mt-12 shadow-md relative hover:-translate-y-11  duration-500"><div className="flex absolute top-4"><div className="px-4 py-1 bg-secondary text-white"><h5>Intermediate</h5></div> <div className="px-2 py-1 bg-primary font-semibold"><p>B1</p></div></div>
            <img className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
              alt=""
            />
            <div className="p-4 pt-3 h-40">
              <h3 className="font-bold text-3xl pb-3">Portuguese</h3>
              <p>
              Work on your conversation skills as well as comprehension and cultural knowledge with our advanced level Japanese classes. 
              </p>
            </div>
            <div className= "text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
              <a href="#" className="text-2xl w-full mt-4">
                Read More
              </a>
            </div>
          </div>
          <div  className="mt-12 shadow-md relative hover:-translate-y-11  duration-500"><div className="flex absolute top-4"><div className="px-4 py-1 bg-secondary text-white"><h5>Intermediate</h5></div> <div className="px-2 py-1 bg-primary font-semibold"><p>B1</p></div></div>
            <img className="w-full"
              src="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
              alt=""
            />
            <div className="p-4 pt-3 h-40">
              <h3 className="font-bold text-3xl pb-3">Portuguese</h3>
              <p>
              Work on your conversation skills as well as comprehension and cultural knowledge with our advanced level Japanese classes. 
              </p>
            </div>
            <div className= "text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
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

export default Classes;