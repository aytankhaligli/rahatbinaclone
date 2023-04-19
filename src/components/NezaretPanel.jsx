import React from "react";

export default function NezaretPanel() {
  return (
    <div>
      <div className="panel h-20 flex items-center">
        <h1 className=" text-white text-lg font-bold">Nəzarət paneli</h1>
      </div>
      <div className="flex items-center justify-between gap-5 mb-4">
        <div className="flex flex-col items-center justify-center w-[224px] h-[267px] bg-gray-600 rounded text-white">
          <i className="dripicons-pulse text-[112px] hover:mb-5"></i>
          <p className="text-lg font-semibold">Aktiv tasklar</p>
        </div>

        <div className="flex flex-col items-center justify-center w-[224px] h-[267px] bg-gray-600 rounded text-white">
          <i className="uil uil-comment-alt-plus text-[112px] hover:mb-5 "></i>
          <p className="text-lg font-semibold">Yeni task yarat</p>
        </div>

        <div className="flex flex-col items-center justify-center w-[224px] h-[267px] bg-gray-600 rounded text-white">
          <i className="uil uil-plus-circle text-[112px] hover:mb-5"></i>
          <p className="text-lg font-semibold">Yeni layihə yarat</p>
        </div>

        <div className="flex flex-col items-center justify-center w-[224px] h-[267px] bg-gray-600 rounded text-white">
          <i className="uil uil-location-point text-[112px] hover:mb-5"></i>
          <p className="text-lg font-semibold">Layihələr</p>
        </div>

        <div className="flex flex-col items-center justify-center w-[224px] h-[267px] bg-gray-600 rounded text-white">
          <i className="uil uil-users-alt text-[112px] hover:mb-5"></i>
          <p className="text-lg font-semibold">İstifadəçilər</p>
        </div>

        <div className="flex flex-col items-center justify-center w-[224px] h-[267px] bg-gray-600 rounded text-white">
          <i className="dripicons-archive text-[112px] hover:mb-5"></i>
          <p className="text-lg font-semibold">Arxiv</p>
        </div>
      </div>
    </div>
  );
}
