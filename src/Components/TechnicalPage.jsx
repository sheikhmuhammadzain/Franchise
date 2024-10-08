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
    <div className="flex bg-[#FAFBFA] min-h-[200vh]">
      <div>
        <Sidebar
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
        />
      </div>
      <div className="flex-1 ">
        <Header />
        <div className="h-screen w-[calc(100%-200px)] ml-auto px-3 mt-[80px] bg-[#FAFBFA]">
          <TechnicalRequest />
        </div>
      </div>
    </div>
  );
};

export default TechnicalPage;
