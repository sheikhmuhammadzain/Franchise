import Sidebar from "./Sidebar";
import Header from "./Header";
import TechnicalRequest from "./TechnicalRequest";
import { useState } from "react";
const TechnicalPage = () => {
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
        <div className="h-screen max-w-[80%] ml-auto mt-[80px] bg-[#FAFBFA]">
          <TechnicalRequest />
        </div>
      </div>
    </div>
  );
};

export default TechnicalPage;
