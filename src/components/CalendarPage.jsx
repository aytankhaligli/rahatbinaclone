import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="p-6 text-[#AAB8C5] bg-gray-700 mt-6 rounded  ">
      <div className="flex justify-between mb-6">
        <h1 className="uppercase font-bold ">Təqvim</h1>
        <i className="mdi mdi-dots-vertical text-[20px]"></i>
      </div>

      <div className="flex ">
        <div className="px-[10px]">
          <Calendar onChange={onChange} />
        </div>
        <div className="flex flex-col gap-5 px-[10px]">
          <div>
            <i className="mdi mdi-calendar text-sm mb-1"></i>
            <span className="text-sm mb-1"> 7:30 AM - 10:00 AM</span>
            <p className="font-bold  my-[10px]">
              PORT BAKU RESIDENCE müdiri ilə görüş
            </p>
          </div>

          <div>
            <i className="mdi mdi-calendar text-sm mb-1"></i>
            <span className="text-sm mb-1"> 10:30 AM - 11:45 AM</span>
            <p className="font-bold  my-[10px]">
              BILGAH ESTATE layihənin fevral ayı hesabatı
            </p>
          </div>

          <div>
            <i className="mdi mdi-calendar text-sm mb-1"></i>
            <span className="text-sm mb-1"> 12:15 PM - 02:00 PM</span>
            <p className="font-bold  my-[10px]">PORT BAKU TOWER 1 - Hesabat</p>
          </div>

          <div>
            <i className="mdi mdi-calendar text-sm mb-1"></i>
            <span className="text-sm mb-1"> 5:30 PM - 07:00 PM</span>
            <p className="font-bold  my-[10px]">
              EXPO CENTER əməkdaşları ilə hesabat görüşü
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
