import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { useState } from "react";
const AdminPage = () => {
   const [activeButton, setActiveButton] = useState(null);

   const handleButtonClick = (buttonId) => {
     setActiveButton(buttonId);
   };
  return (
    <div className="flex bg-gray-50">
      <div>
        <Sidebar
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
        />
      </div>
      <div className="flex-1 ">
        <Header />
        <div className="min-h-screen w-[calc(100%-220px)] ml-auto  mt-[80px] bg-[#FAFBFA]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default AdminPage