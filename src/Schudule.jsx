import image from "./assets/stats.webp";
const Schudule = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <div className="md:w-1/2 w-full">
          <img src={image} alt="" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="uppercase text-orange-400 font-semibold">Schudule</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Stremline Your Business <br /> With Smart Schudule Soluctins
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quas perspiciatis, dignissimos accusantium repellat magni ipsum
            quibusdam illum placeat aspernatur!
          </p>
          <a
            href=""
            className="text-blue-600 font-semibold flex items-center gas-2 hover:gap-4 transition-all duration-300"
          >
            Explore Schuduling Features
            <div>✔</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schudule;
