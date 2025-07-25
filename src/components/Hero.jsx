import { FaLongArrowAltRight } from "react-icons/fa";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto pt-44 pb-6 px-4 sm:px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 group-hover:text-amber-300  group-hover:scale-100 transition-transform">
            ❤
          </span>
          <span className="text-sm font-medium capitalize hover:font-bold">
            jump start your growth
          </span>
        </div>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
          we boost the growth for{" "}
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
          </span>
          <span></span> Compaines <span>❤</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis, neque aliquid fuga earum corrupti rerum asperiores ullam
          fugit at quas.
        </p>
        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img
            src={heroImage}
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
