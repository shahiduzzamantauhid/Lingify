
const Testimonial = () => {
    return (
        <div>
            <div className="bg-[url('assets/Images/testimonials-bg.webp')] bg-center bg-cover bg-no-repeat h-[600px] mb-20">
                <div className="w-10/12 mx-auto my-20">
                    <div className="w-auto h-[100px]"></div>
                    <div className="lg:w-5/12 h-[500px] bg-secondary lg:p-12 p-2">
                        <h2 className="font-bold text-4xl lg:text-6xl text-base-100 mb-8 ">Testimonials-</h2>
                        <p className="font-semibold text-3xl lg:text-5xl text-base-100 leading-snug mb-8">Founded 20 years ago - in 1999 as a small language center, today we have educated more than 15,000 people.</p>
                        <p className="font-semibold text-xl text-base-100 leading-snug">Jenna Smith</p>
                        <p className="font-semibold text-xl text-base-100 leading-snug">Germany, 28</p>
                    </div>
                    <div className="lg:w-5/12 bg-primary hover:bg-accent hover:text-base-100 text-center py-6 duration-300">
                        <a href="#" className="w-full text-xl font-bold">Meet Our Teachers</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;