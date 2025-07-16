import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="container mx-auto pt-44 pb-6 px-4 sm:px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 group-hover:text-amber-300  group-hover:scale-100 transition-transform">
            ❤
          </span>
          <span className="text-sm font-medium capitalize hover:font-bold">
            jump start your growth
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
