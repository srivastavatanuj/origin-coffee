import { useState } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navMenu = [
    { name: "Home", path: "/" },
    { name: "Order", path: "/order" },
    { name: "Wholesale", path: "/wholesale" },
    { name: "Taste", path: "/taste" },
    {
      name: "Learn",
      path: "https://vancouvercoffeeacademy.com/",
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="h-[180px] flex justify-between px-10  items-center absolute w-full z-10">
      <div className="m-auto lg:m-0">
        <a href="/">
          <img src="/logo.png" alt="logo" className="w-[210px]" />
        </a>
      </div>
      <div className=" gap-5 text-white hidden lg:flex">
        {navMenu.map((item) => (
          <div key={item.name} className="text-sm cursor-pointer">
            <Link to={item.path} className="cursor-pointer">
              {item.name}
            </Link>
          </div>
        ))}
        <span className="mr-5 flex items-center">
          <HiMiniShoppingCart size={24} />
          <p className="text-sm ml-1">12</p>
        </span>
      </div>
    </div>
  );
};
