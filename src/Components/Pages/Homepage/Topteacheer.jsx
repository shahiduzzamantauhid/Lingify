const Topteacheer = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-20">
        <div className="lg:w-4/6 mx-auto">
          <h2 className="text-center text-5xl font-bold mt-40 mb-8">
            Our Top Teachers
          </h2>
          <h2 className="text-center text-xl mb-16">
            Our interactive teaching method engages you in the learning process
            so that you learn communication skills and develop confidence
            quickly.
          </h2>
        </div>
        <div className="lg:grid grid-cols-4 justify-between items-center gap-3">
          <div className="rounded-md shadow-md relative hover:-translate-y-11 duration-500 mt-12">
            <img
              src="https://scuola.vamtam.com/wp-content/uploads/2019/12/p-8.jpg"
              alt=""
            />
            <div className="p-4 lg:h-24">
              <h3 className="font-bold text-3xl">Michael C. Johnson</h3>
              <p className="text-xl">Director of Teacher Training</p>
            </div>
            
          </div>
          <div className="rounded-md shadow-md relative hover:-translate-y-11 duration-500 mt-12">
            <img
              src="https://scuola.vamtam.com/wp-content/uploads/2019/12/p-7.jpg"
              alt=""
            />

            <div className="p-4 lg:h-24">
              <h3 className="font-bold text-3xl">Michael C. Johnson</h3>
              <p className="text-xl">Director of Teacher Training</p>
            </div>
            
          </div>
          <div className="rounded-md shadow-md relative hover:-translate-y-11  duration-500 mt-12">
            
            <img
              src="https://scuola.vamtam.com/wp-content/uploads/2019/12/p-5.jpg"
              alt=""
            />
            <div className="p-4 lg:h-24">
              <h3 className="font-bold text-3xl">Michael C. Johnson</h3>
              <p className="text-xl">Director of Teacher Training</p>
            </div>
            
          </div>
          <div className="rounded-md shadow-md relative hover:-translate-y-11  duration-500 mt-12">
            
            <img
              src="https://scuola.vamtam.com/wp-content/uploads/2019/12/p-1.jpg"
              alt=""
            />
            <div className="p-4 lg:h-24">
              <h3 className="font-bold text-3xl">Michael C. Johnson</h3>
              <p className="text-xl">Director of Teacher Training</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Topteacheer;
