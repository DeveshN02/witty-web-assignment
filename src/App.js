import Navbar from "./components/Navbar";
import image1 from "./assests/digital landing.jpg";
import image2 from "./assests/cityscape.jpg";
import Card from "./components/Card";

function App() {
  return (
    <div className="w-full h-fit pb-20 bg-black">
      {/* navbar */}

      <Navbar />

      {/* mainpage 1*/}
      <div className="h-screen w-full relative">
        <img
          className="h-full w-full bg-center brightness-50   object-cover"
          src={image1}
          alt="ajkhd"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col gap-10">
          {/* content 1 */}
          <div className="text-white text-4xl sm:flex-row flex-col flex flex-wrap gap-4 uppercase sm:gap-5 ">
            <span className="sm:border-r-8 sm:border-b-0 border-b-8 py-1 border-emerald-400 sm:px-3 rounded-md">
              Automate
            </span>
            <span className="sm:border-r-8 sm:border-b-0  border-b-8 py-1 border-emerald-400 sm:px-3 rounded-md">
              Integrate
            </span>
            <span className="sm:border-r-8 sm:border-b-0  border-b-8 py-1 border-emerald-400 sm:px-3 rounded-md">
              Scale
            </span>
          </div>

          {/* content 2 */}
          <h2 className="text-center md:text-4xl text-2xl mx-3 font-semibold uppercase  text-white">
            Leading-edge Technology Solutions for sustainable{" "}
            <p>Digital Transformation</p>
          </h2>
        </div>
      </div>

      {/* between 2 page */}
      <section className="w-11/12 mx-auto md:px-10 py-10  md:py-20 flex flex-col gap-8">
        <h1 className="text-zinc-200 font-semibold text-xl md:text-3xl  text-center">
          ARE YOU LOOKING TO BUILD, EXPAND, OR MODERNIZE? WE HAVE THE PERFECT
          DIGITAL SOLUTIONS FOR YOU
        </h1>
        <p className="text-zinc-200 font-semibold text-lg sm:text-xl  text-center">
          We leverage advanced technology to address challenges faced by global
          enterprises in building their digital infrastructure to facilitate
          better business practices and improve customer interactions. Our
          Building Blocks model ensures that we create modular solutions which
          help you scale and achieve your business ambitions.
        </p>
      </section>

      {/* mainpage 2  */}

      <div className="min-h-screen  w-full bg-black relative">
        {/* bg-image */}
        <img
          className="h-full w-full bg-center brightness-50   object-cover"
          src={image2}
          alt="images"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex pt-20 justify-between items-center md:flex-col  gap-10 md:px-20 px-5 flex-wrap ">
          <Card title={"Discover the Right Solution for you"} />
          <Card title={"Digital Strategy"} />
        </div>
      </div>
      {/* 
      other content */}

      <div className="md:py-24 py-10 px-10 flex flex-col justify-center items-center gap-5 bg-black">
        <h1 className="text-zinc-200 font-semibold text-xl md:text-3xl  text-center">
          Stay in touch
        </h1>
        <p className="text-zinc-200 font-semibold text-lg sm:text-xl  text-center">
          Subscribe to Receive our latest update and insights
        </p>
        <form>
          <input
            placeholder="Email"
            className="px-10 py-3 rounded-lg w-[1/2] text-xl font-semibold "
          />
          <button className="bg-white text-black font-md font-semibold py-3 px-6 rounded-lg mx-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
