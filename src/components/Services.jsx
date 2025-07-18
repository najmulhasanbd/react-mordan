import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";

const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
  },
  {
    icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
  },
];
const Services = () => {
  return (
    <section className="container py-20 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="md:w-1/3 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Future of support with new shape
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            praesentium.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-between">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span>UX design content stratege</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-between">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span>UX design content stratege</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-between">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span>UX design content stratege</span>
            </div>
          </div>
          <button className="bg-blue-700 px-5 mt-5 cursor-pointer transition-all duration-300 hover:scale-100 py-2 rounded-full text-white font-bold">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.index}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors uppercase"
              >
                learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
