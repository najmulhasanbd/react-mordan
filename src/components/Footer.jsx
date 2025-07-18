import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import logo from "../assets/fav-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-5">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <span className="font-bold"> The Next Design</span>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            dolores ab autem sunt debitis maiores?
          </p>
          <div className="flex gap-2">
            <a href="" className="bg-gray-300 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="" className="bg-gray-300 p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="" className="bg-gray-300 p-2 rounded-full">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-md">Company</h2>
          <ul>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
                href=""
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
                href=""
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-md">Get Help</h2>
          <ul>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                Support Carrer
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                24th Service
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                Quick Chat
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-md">Support</h2>
          <ul>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                Policy
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                Business
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-md">Contact</h2>
          <ul>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-gray-600 font-bold transition-all duration-300 hover:text-blue-300 hover:ml-1"
              >
                Support 24
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
