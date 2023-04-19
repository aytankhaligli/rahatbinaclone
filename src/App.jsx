import { useState } from "react";
import Header from "./components/Header";
import Mainpage from "./components/Mainpage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-800 w-full">
      <Header />
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      <Mainpage />
      <footer className="text-white ml-20 mt-6 p-6 border-t border-[rgba(206,212,218,.2)]">
        &copy; 2017-2022 RahatOfis. Bütün hüquqlar qorunur
      </footer>
    </div>
  );
}

export default App;
