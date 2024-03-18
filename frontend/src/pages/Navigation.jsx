import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sticky z-10 top-0 bg-gray-800 text-white w-full">
      <div className="w-full h-[55px] flex justify-between ">
        <div className="flex justify-between ml-20">
          <Link
            className="flex justify-around px-4"
            to={"/"}
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          >
            <h1 className="h-[25px] m-2 font-bold text-3xl">E-Shop</h1>
          </Link>
        </div>

        <div className="flex justify-between mx-20 box-border">
          <Link
            className="flex justify-around px-6 hover:bg-gray-50 hover:text-black hover:font-medium items-center transition ease-linear focus:bg-white focus:text-black"
            to={"/"}
          >
            <span>Home</span>
          </Link>
          <Link
            className="flex justify-around px-6 hover:bg-gray-50 hover:text-black hover:font-medium items-center transition ease-linear focus:bg-white focus:text-black"
            to={"/products"}
          >
            <span>Product</span>
          </Link>
          <Link
            className="flex justify-around px-6 hover:bg-gray-50 hover:text-black hover:font-medium items-center transition ease-linear focus:bg-white focus:text-black"
            to={"/service"}
          >
            <span>Service</span>
          </Link>
          <Link
            className="flex justify-around px-6 hover:bg-gray-50 hover:text-black hover:font-medium items-center transition ease-linear focus:bg-white focus:text-black"
            to={"/contact-us"}
          >
            <span>ContactUs</span>
          </Link>
          <Link
            className="flex justify-around px-6 hover:bg-gray-50 hover:text-black hover:font-medium items-center transition ease-linear focus:bg-white focus:text-black"
            to={"/about"}
          >
            <span>About</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
