import React, { useState } from "react";
import az from "../assets/images/az.jpg";
import us from "../assets/images/us.jpg";
import avatar_ofis from "../assets/images/avatar_ofis.jpg";
export default function Header() {
  const [lang, setLang] = useState(true);
  return (
    <div className="bg-gray-700 flex items-center justify-between h-20 px-5 ml-20">
      <div className="flex items-center ">
        <i className="mdi mdi-menu text-2xl text-[#CED4DA]"></i>

        <form className="h-10 my-5 text-white relative">
          <i className="mdi mdi-magnify text-2xl text-[#CED4DA] absolute left-7 top-1 "></i>

          <input
            placeholder="Axtarış..."
            className="bg-gray-600  ml-5 rounded-l h-full pl-10 w-60 focus:outline-none"
          />
          <button className=" bg-[#727cf5] cursor-pointer py-2 px-4 rounded-r text-white">
            Axtar
          </button>
        </form>
      </div>
      <div className="flex items-center gap-5 relative">
        <div className=" text-[#CED4DA]">
          <div className="bg-gray-700  flex items-center">
            <div className="flex items-center mr-1">
              <img src={az} alt="aze flag" className="h-3 mr-[6px]" />
              <p>Azərbaycan</p>
            </div>
            <span
              onClick={() => setLang((pre) => !pre)}
              className="cursor-pointer"
            >
              <i className="mdi mdi-chevron-down"></i>
            </span>
          </div>
          <div
            className={`bg-gray-700 ${
              lang ? "hidden" : "flex"
            } items-center mr-1 px-5 py-2 absolute -bottom-12 -left-7 rounded w-40 h-11`}
          >
            <img src={us} alt="usa flag" className="h-3 mr-[6px]" />
            <p>English</p>
          </div>
        </div>
        <div className="relative">
          <i className="dripicons-bell text-[#CED4DA] text-2xl"></i>
          <span className="w-2 h-2 rounded-full bg-[#fa5c7c] absolute -right-1 -top-1"></span>
        </div>

        <i className="dripicons-gear text-[#CED4DA] text-2xl"></i>
        <div className="w-50 bg-gray-600 h-20 text-[#CED4DA] px-5 flex items-center gap-5 justify-center">
          <img
            src={avatar_ofis}
            alt="profil foto"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-bold">Fuad Məmmədov</p>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
