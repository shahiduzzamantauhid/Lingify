import location from "../../../Assets/Images/location.png";
import { FaCheck } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
const Location = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <h2 className="font-bold text-5xl mt-24">Location</h2>
        <div className="w-full mt-8">
          <img src={location} alt="" />
        </div>
        <div className="lg:flex">
          <div className="lg:w-4/12">
            <div className="">
              <img
                src="https://scuola.vamtam.com/wp-content/uploads/2020/04/h-01.jpg"
                alt=""
              />
            </div>
            <div className="bg-accent py-6 lg:py-12">
                <div className="lg:flex ">
                   <div className="w-2/12 text-primary text-6xl mt-8 mx-auto "><BiWorld/></div> 
                   <div className="lg:w-4/6 lg:text-start sm:text-center">
                    <h5 className="text-2xl text-base-100">Come And Visit Us</h5>
                    <p className="text-xl text-base-100">359 Van Brunt St,</p>
                    <p className="text-xl text-base-100">Brooklyn,</p>
                    <p className="text-xl text-base-100">NY 11231, USA</p>
                   </div> 
                </div>
                <div className="lg:flex mt-6">
                   <div className="w-2/12 text-primary text-6xl mt-8 mx-auto"><BsPhoneFill/></div> 
                   <div className="lg:w-4/6 lg:text-start sm:text-center">
                    <h5 className="text-2xl text-base-100">Book A Free Lesson</h5>
                    <p className="text-xl text-base-100">+1 (800) 646-286-4018</p>
                    <p className="text-xl text-base-100">+1 (800) 646-286-4018</p>
                    <p className="text-xl text-base-100">@shahiduzzamantauhid</p>
                   </div> 
                </div>
            </div>
          </div>
          <div className="lg:w-8/12 mb-12 shadow-md">
            <div className="p-6 py-8">
              <h2 className="font-semibold text-4xl leading-snug py-12 border-b-2 border-base-200">
                Scuola New York English School 36 W 138th St, New York, NY,
                10037
              </h2>
              
              <p className="text-xl leading-snug py-10">
              TALK Aventura is located in this “City of Excellence”, an affluent international city to the north of the Miami metropolitan area. It is located just minutes from the beautiful beaches of Hallandale, Golden Beach and Sunny Isles.
              </p>
              <div className="lg:flex pt-12">
                <div className="lg:w-3/6 pl-12">
                    <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                    <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                    <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                    <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                </div>
                <div className="lg:w-3/6 pl-12">
                <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                    <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                    <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                    <div className="flex text-xl mt-3"><FaCheck/> <p className="-mt-1 ml-4">13 Classrooms</p> </div>
                </div>
              </div>
            </div>
            <div className=" bg-primary hover:bg-accent hover:text-base-100 text-center py-4 duration-500">
              <a href="#" className="w-full text-xl font-bold">
                Play Video
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Location;
