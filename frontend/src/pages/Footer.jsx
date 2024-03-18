import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 px-20 pt-20 pb-3 ">
      <div className="flex flex-col">
        <div className="flex mb-[5rem] text-gray-300 gap-16">
          <div className="w-[600px] pr-10 ">
            <h1 className="text-4xl font-bold mb-6">E-Shop</h1>
            <p>
              MonAuto est une entreprise qui fait le commerce, l{'\''}entretien et
              les réparations de voitures. MonAuto désire exploiter un logiciel
              de gestion des réparations; elle dispose déjà d{'\''}un logiciel
              comptable. Les factures de réparations seront imprimées et gérées
              par le logiciel comptable. Le logiciel de gestion des réparations
              devra communiquer avec le logiciel comptable pour lui transmettre
              les réparations à facturer.
            </p>
          </div>

          <div className="w-[400px] ">
            <h1 className="text-xl font-bold mb-6">Information</h1>
            <div className="flex flex-col gap-2">
                <Link>About Us</Link>
                <Link>Faq</Link>
                <Link>Terms And Conditions</Link>
                <Link>Contact Us</Link>
                <Link>Help</Link>
            </div>
          </div>

          <div className="w-[400px] ">
            <h1 className="text-xl font-bold mb-6">Customer Service</h1>
            <div className="flex flex-col gap-2">
                <Link>Payment Methods</Link>
                <Link>Privacy Policy</Link>
                <Link>Shipping</Link>
            </div>
          </div>

          <div className="w-[400px] ">
            <h1 className="text-xl font-bold mb-6">Get In Touch</h1>
            <div className="flex flex-col gap-2">
                <span>NO.241 - Meknes, Marjane</span>
                <span>Morocco</span>
                <span>e-shop@gmail.com</span>
                <span>+34-6445-3421</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-2 items-center">
          <span className="text-gray-300">
            copyright © {new Date().getFullYear()} - All rights reserved
          </span>
          <div className="text-gray-300 flex gap-4">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
