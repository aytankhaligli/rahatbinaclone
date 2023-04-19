import React from "react";
import NezaretPanel from "./NezaretPanel";
import SonTasklar from "./SonTasklar";
import SonFealliyyetler from "./SonFealliyyetler";
import StatusCard from "./StatusCard";
import CalendarPage from "./CalendarPage";

export default function Mainpage() {
  return (
    <div className="ml-20 px-5">
      <NezaretPanel />
      <SonTasklar />
      <SonFealliyyetler />
      <div className="grid grid-cols-3 gap-y-6 gap-x-10 justify-between w-full">
        <StatusCard done="64" continued="26" delay="10" />
        <StatusCard done="55" continued="15" delay="30" />
        <StatusCard done="45" continued="16" delay="39" />
        <StatusCard done="34" continued="21" delay="45" />
        <StatusCard done="30" continued="40" delay="30" />
        <StatusCard done="25" continued="15" delay="60" />
        <StatusCard done="35" continued="45" delay="20" />
        <StatusCard done="14" continued="24" delay="62" />
      </div>
      <CalendarPage />
    </div>
  );
}
