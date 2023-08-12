import {BsInstagram , BsFacebook , BsTelephonePlusFill } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import Logo from "../../assets/images/LingiFy.png";
import foot from "../../assets/images/foot.png";
import foot1 from "../../assets/images/foot1.png";
import foot2 from "../../assets/images/foot2.png";
const Footer = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <footer className="footer lg:flex p-10 text-base-content">
        <div className="w-4/12 pr-8">
          <img src={Logo} alt="" />
          <p>
          Scuola School was founded in 1998 as a business career school in Manhattan. We are a premier licensed private career school offering a variety of high quality courses.
          </p>
          <div className="flex text-lg font-semibold pl-8 py-4"><span className="text-2xl"><BsTelephonePlusFill/></span><p className="-mt-1 ml-4"> +8801730474900</p></div>
        <div className="lg:flex gap-8 mt-4"><img src={foot1} alt="" /><img src={foot2} alt="" /></div>
        </div>
        <div className="w-2/12 mt-12">
          <span className="footer-title">Courses</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="w-2/12 mt-12">
          <span className="footer-title">About</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="lg:w-4/12 mt-8">
          <span className="footer-title">Follow us</span>
          <div className="flex">
            <span className="text-3xl pr-6"><BsFacebook/></span>
            <span className="text-3xl pr-6"><AiOutlineTwitter/></span>
            <span className="text-3xl pr-6"><BsInstagram/></span>
            
          </div>
          <div className="w-full lg:-mt-28">
                
                <img src={foot} alt="" />
                  </div>
        </div>
      </footer>
      <footer className="footer items-center p-4 py-6 text-neutral-content -mt-12 border-t-2 ">
  <div className="items-center grid-flow-col">
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>Terms & Conditions</a> 
    <a>Privacy Policy</a>
    <a>Legal</a>
  </div>
</footer>
    </div>
  );
};

export default Footer;
