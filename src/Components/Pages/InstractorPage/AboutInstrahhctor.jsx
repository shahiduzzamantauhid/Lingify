import { TypeAnimation } from "react-type-animation";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdLiveHelp } from "react-icons/md";
const AboutInstrahhctor = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <h2 className="text-5xl font-semibold mt-24 mb-10">Hi,</h2>
          <h2 className="text-6xl font-semibold">
            <span className=""> I{"'"}m </span>
            <TypeAnimation
              className="text-primary border-b-4 border-primary pb-2"
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Mr. Rashed Islam.",
                1000,
              ]}
              speed={200}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-2xl mt-16 mb-4 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rerum vero nemo veritatis vitae reiciendis perferendis necessitatibus eligendi earum? Quisquam vitae molestiae recusandae, debitis impedit neque omnis nihil voluptates quam consectetur porro incidunt at perspiciatis quia veritatis ratione dignissimos facilis, nostrum optio dolore! Nisi quod odit in veniam assumenda magnam!
          </p>
          <p className="text-2xl mt-8 mb-4 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, cum illo distinctio ipsam perspiciatis esse ducimus dolorum unde saepe pariatur itaque quibusdam ad eos atque repellat explicabo ea nulla a beatae! Nostrum earum eveniet obcaecati ipsam. Omnis repudiandae suscipit asperiores, odit consequuntur nesciunt eum provident iure aspernatur dignissimos natus voluptatum inventore facilis consectetur doloribus perferendis sunt! Iste culpa sed totam eum dolorum, molestias fugit quod! Dolorum nulla sed recusandae? Repellat.
          </p>
          
        </div>
        <div className="">
          <div className="w-full -mt-24 z-50 p-8 relative">
            <img
              className="mx-auto z-50"
              src="https://scuola.vamtam.com/wp-content/uploads/2019/12/p-8.jpg"
              alt=""
            />
          </div>
          <div className="w-2/6 mx-auto text-center border-t-4 border-primary pt-4">
            <div className="flex justify-evenly items-center text-4xl text-secondary">
            <FaFacebook/>
            <BsTwitter/>
            <BsLinkedin/>
            <BsInstagram/>
            </div>
            </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto shadow-2xl rounded-3xl">
        <div className="w-full mx-auto backdrop-blur-3xl py-12 my-16 rounded-3xl flex justify-evenly items-center ">
            <div className="">
                <div className="text-8xl text-primary flex items-center"><MdLiveHelp/><h2 className="text-5xl font-semibold text-center">Got a Question?</h2></div>
                
                
                <div></div>
            </div>
            <div className=""><Link className="text-center px-8 rounded-2xl py-4 duration-300 hover:bg-accent text-base-100 bg-primary text-2xl font-semibold">Contact Me</Link></div>
        </div>
      </div>
    </div>
  );
};
export default AboutInstrahhctor;