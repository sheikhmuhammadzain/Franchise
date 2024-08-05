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
    <div className="flex">
      <div>
        <Sidebar
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
        />
      </div>
      <div className="flex-1 ">
        <Header />
        <div className="h-screen max-w-[100%] bg-[#FAFBFA]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default AdminPage