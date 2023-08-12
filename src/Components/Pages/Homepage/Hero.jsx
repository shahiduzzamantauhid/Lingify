// import heroImg from "../../../Assets/Images/heroImg.png";
const Hero = () => {
  return (
    <>
      <div className="mt-36 bg-[url('Assets/Images/wave-haikei.svg')] bg-center bg-cover bg-no-repeat pb-52">
        <div className="w-10/12 mx-auto lg:flex ">
          <div className="lg:w-3/6">
            <h1 className="font-bold lg:text-7xl text-5xl leading-snug">
              Achieve The Best Result With {}
              <span className="text-primary underline">Lingify</span>
            </h1>
            <p className="lg:text-2xl text-xl mt-4 leading-relaxed">
              With over 45 years of experience, Scuola is internationally
              recognized as an american leader in effective and optimal language
              training for beginners and intermediates.
            </p>
            <div className="mt-12"><a
              href="#"
              className="px-24 py-5 rounded-lg text-xl font-semibold btn-primary "
            >
              Apply Now
            </a></div>
          </div>
          <div className="lg:w-3/6 bg-[url('Assets/Images/hero.png')] bg-center bg-cover bg-no-repeat lg:h-[650px] h-72"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
