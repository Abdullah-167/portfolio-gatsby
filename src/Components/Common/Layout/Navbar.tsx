import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import useClickOutside from "../../../hooks/useClickOutside";

const Navbar = () => {
  const [toggelTab, setToggelTab] = useState<boolean>(false);
  const location = useLocation();

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setToggelTab(false);
  });
  const handleMenu = () => {
    setToggelTab(!toggelTab);
  };

  useEffect(() => {
    if (toggelTab) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [toggelTab]);

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`py-10 sm:py-6  ${isHomePage ? " bg-transparent" : " nav-bg"}`}
    >
      <div className="flex justify-between items-center container">
        <div>
          <Link to="/">
            <StaticImage
              src={"../../../images/logo.svg"}
              className="sm:w-[143px] w-[65px] sm:h-[63px] h-[29px]"
              alt="Logo"
              width={143}
              height={63}
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((item, index) => {
            return (
              <Link to={item.url}>
                <span
                  key={index}
                  className={`text-sm cursor-pointer text-white`}
                >
                  {item.link}
                </span>
              </Link>
            );
          })}
        </div>
        <div
          className={`md:hidden flex text-white cursor-pointer ${
            toggelTab ? "text-3xl" : "text-4xl"
          }`}
          onClick={() => handleMenu()}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.33333 23H25.6667C26.4 23 27 22.4 27 21.6667C27 20.9333 26.4 20.3333 25.6667 20.3333H4.33333C3.6 20.3333 3 20.9333 3 21.6667C3 22.4 3.6 23 4.33333 23ZM4.33333 16.3333H25.6667C26.4 16.3333 27 15.7333 27 15C27 14.2667 26.4 13.6667 25.6667 13.6667H4.33333C3.6 13.6667 3 14.2667 3 15C3 15.7333 3.6 16.3333 4.33333 16.3333ZM3 8.33333C3 9.06667 3.6 9.66667 4.33333 9.66667H25.6667C26.4 9.66667 27 9.06667 27 8.33333C27 7.6 26.4 7 25.6667 7H4.33333C3.6 7 3 7.6 3 8.33333Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-full absolute h-full top-0 py-5 transition-all duration-700 shadow-md bg-[#18154C] z-[1000]  max-w-[300px] min-h-[300px] ${
          toggelTab ? " -left-0 opacity-100 " : " opacity-0 -left-[800px]"
        }`}
        ref={dropdownRef}
      >
        <div
          className={`flex justify-end pr-8 pt-8 text-white cursor-pointer mb-20 ${
            toggelTab ? "text-3xl" : "text-4xl"
          }`}
          onClick={() => handleMenu()}
        >
          <RxCross1 />
        </div>
        {toggelTab && (
          <div className="flex flex-col gap-10 justify-start pl-10">
            {links.map((item, index) => {
              return (
                <Link to={item.url}>
                  <span
                    key={index}
                    className={`text-sm font-semibold cursor-pointer text-white transition-all hover:text-[#CEA8CF]`}
                  >
                    {item.link}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const links = [
  {
    link: "SERVICIOS",
    url: "/service",
  },
  {
    link: "PORTAFOLIO",
    url: "/portfolio",
  },
  {
    link: "NOSOTROS",
    url: "/nosotros",
  },
  {
    link: "BLOG",
    url: "/blog",
  },
  {
    link: "CONTACTO",
    url: "/contact",
  },
];
