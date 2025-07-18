import amazon from "../assets/amazon.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import slack from "../assets/slack.png";
import woocommerce from "../assets/woocommerce.png";
const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <section className="container mx-auto w-full py-20 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start">
      <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partnet at <br /> Hubspot & Segment
      </div>
      <div className="flex whitespace-nowrap animation-marquee">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="company logo"
            className="mx-12 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyLogo;
