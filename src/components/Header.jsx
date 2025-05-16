import { useState, useRef, useEffect } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store/store";
import { IoMdArrowDropdown } from "react-icons/io";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userLoggedOut, loginStatus, userName, cartItems } = useStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    userLoggedOut();
    navigate("/login");
  };

  const navMenu = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Wholesale", path: "/wholesale" },
    { name: "Taste", path: "/taste" },
    {
      name: "Learn",
      path: "https://vancouvercoffeeacademy.com/",
    },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    addEventListener("mousedown", handleClickOutSide);

    return () => {
      removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div className="h-[180px] flex justify-between px-10  items-center absolute w-full z-10">
      <div className="m-auto lg:m-0">
        <a href="/">
          <img src="/logo.png" alt="logo" className="w-[210px]" />
        </a>
      </div>
      <div className=" gap-5 text-white hidden lg:flex items-center">
        {navMenu.map((item) => (
          <div key={item.name} className="text-sm cursor-pointer">
            <Link to={item.path} className="cursor-pointer">
              {item.name}
            </Link>
          </div>
        ))}
        {loginStatus ? (
          <div className="relative" ref={menuRef}>
            <span
              className="flex items-center border py-1 px-3 cursor-pointer gap-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <p>{"Hey, " + userName}</p>
              <IoMdArrowDropdown size={20} />
            </span>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 border rounded shadow-lg bg-[#333232]">
                <div
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </div>
                <div
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-black  cursor-pointer"
                  onClick={() => navigate("/orders")}
                >
                  Orders
                </div>
                <div
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-black  cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <span
            className="flex items-center border py-1 px-3 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <p>Login</p>
          </span>
        )}
        {loginStatus && (
          <span
            className="mr-5 flex items-center cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <HiMiniShoppingCart size={24} />
            <p className="text-sm ml-1">{cartItems}</p>
          </span>
        )}
      </div>
    </div>
  );
};
