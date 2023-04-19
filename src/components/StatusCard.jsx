import React, { useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "./Chart";

export default function StatusCard({ done, continued, delay }) {
  return (
    <div className="bg-gray-700 rounded text-[#AAB8C5] p-6   ">
      <div className="flex items-center justify-between  mb-9">
        <h1 className="uppercase font-bold">Port Baku Residence</h1>
        <i className="mdi mdi-dots-vertical"></i>
      </div>
      <div className="diagram  h-[300px] flex items-center justify-center">
        <ApexCharts done={done} continued={continued} delay={delay} />
      </div>

      <div className="mt-3 py-3 flex justify-between items-center">
        <div className="flex flex-col items-center gap-3">
          <i className="mdi mdi-trending-up  text-[#0acf97] text-2xl"></i>
          <p className="text-2xl">{done}%</p>
          <p className="text-[#8391A2]">Tamamlanmış</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <i className="mdi mdi-trending-down  text-[#727cf5] text-2xl"></i>
          <p className="text-2xl">{continued}%</p>
          <p className="text-[#8391A2]">Davam edən</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <i className="mdi mdi-trending-up  text-[#fa5c7c] text-2xl"></i>
          <p className="text-2xl">{delay}%</p>
          <p className="text-[#8391A2]">Gecikdirilən</p>
        </div>
      </div>
    </div>
  );
}
