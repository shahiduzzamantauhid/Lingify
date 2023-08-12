import teachersvg from "../../../Assets/Images/teacher.svg";
const WhyBest = () => {
    return (
        <>
            <div className="w-10/12 mx-auto my-28">
        <h2 className="text-center text-3xl font-bold mb-4 text-secondary"> Why Lingify?</h2>
        <h2 className="text-center text-3xl lg:text-5xl font-bold mb-20 lg:w-4/6 mx-auto"> Language Courses to Help You
Explore The World</h2>
        <div className="lg:grid grid-cols-3 justify-between items-center">
          <div className="p-6 hover:bg-slate-100 rounded duration-300">
          <img className="h-24 mx-auto animate-bounce-slow"
              src={teachersvg}
              alt=""
            />
            <div className="pt-3 lg:h-40 text-center">
              <h3 className="font-bold text-3xl py-3">Portuguese</h3>
              <p>
              Spanish is the second most spoken language on earth, second only to Mandarin, and growing in use every day. 
              </p>
            </div>
            <div className="pr-1 text-center mt-6">
              <a href="#" className="btn border-none btn-primary hover:bg-secondary rounded-full text-2xl text-base-100">
                +
              </a>
            </div>
          </div>
          <div className="p-6 hover:bg-slate-100 rounded duration-300">
           <img className="h-24 mx-auto animate-bounce-slow"
              src={teachersvg}
              alt=""
            />
            <div className="pt-3 h-40 text-center">
              <h3 className="font-bold text-3xl py-3">Portuguese</h3>
              <p>
              Spanish is the second most spoken language on earth, second only to Mandarin, and growing in use every day. 
              </p>
            </div>
            <div className="pr-1 text-center mt-6">
              <a href="#" className="btn border-none btn-primary hover:bg-secondary rounded-full text-2xl text-base-100">
                +
              </a>
            </div>
          </div>
          <div className="p-6 hover:bg-slate-100 rounded duration-300">
           <img className="h-24 mx-auto animate-bounce-slow"
              src={teachersvg}
              alt=""
            />
            <div className="pt-3 h-40 text-center">
              <h3 className="font-bold text-3xl py-3">Portuguese</h3>
              <p>
              Spanish is the second most spoken language on earth, second only to Mandarin, and growing in use every day. 
              </p>
            </div>
            <div className="pr-1 text-center mt-6">
              <a href="#" className="btn border-none btn-primary hover:bg-secondary rounded-full text-2xl text-base-100">
                +
              </a>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default WhyBest;