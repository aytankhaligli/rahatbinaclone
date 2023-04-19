import React from "react";
import logo from "../assets/images/pashalogo_dark.png";

export default function Sidebar() {
  return (
    <div className="w-20 h-screen bg-gray-700 flex flex-col gap-10 items-center ">
      <div className="h-20 flex items-center justify-center text-white">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex flex-col  w-96 text-center">
        <li className="side-nav hover:bg-[#727cf5]  cursor-pointer  flex items-center justify-center">
          <i className="uil uil-home-alt side-icon text-2xl  text-[#8391a2] cursor-pointer "></i>
          <p className="hidden side-text  pl-4 text-white">Nəzarət paneli</p>
        </li>
        <li className="side-nav hover:bg-[#727cf5] ">
          <i className="side-icon uil uil-comment-alt-plus text-2xl  text-[#8391a2] cursor-pointer"></i>
          <p className="hidden side-text whitespace-nowrap pl-4 text-white">
            Yeni task yarat
          </p>
        </li>
        <li className="side-nav hover:bg-[#727cf5] ">
          <i className="side-icon uil uil-plus-circle text-2xl  text-[#8391a2] cursor-pointer"></i>
          <p className="hidden side-text whitespace-nowrap pl-4 text-white">
            Yeni layihə yarat
          </p>
        </li>
        <li className="side-nav hover:bg-[#727cf5] ">
          <i className="side-icon uil uil-location-point text-2xl  text-[#8391a2] cursor-pointer"></i>

          <p className="hidden side-text whitespace-nowrap pl-4 text-white">
            Layihələr
          </p>
        </li>
        <li className="side-nav hover:bg-[#727cf5] ">
          <i className="side-icon uil uil-users-alt text-2xl  text-[#8391a2] cursor-pointer"></i>

          <p className="hidden side-text whitespace-nowrap pl-4 text-white">
            Qruplar/İstifadəçilər
          </p>
        </li>

        <li className="side-nav hover:bg-[#727cf5] ">
          <i className="side-icon dripicons-archive text-2xl  text-[#8391a2] cursor-pointer"></i>

          <p className="hidden side-text whitespace-nowrap pl-4 text-white">
            Arxiv
          </p>
        </li>
      </ul>
    </div>
  );
}
