import Header from "./Components/Header";
import ManageUserPage from "./Components/ManageUserPage";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
const App = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
    
      <Header />
      <Sidebar activeButton={activeButton} onButtonClick={handleButtonClick} />
      <ManageUserPage />
      
    </>
  );
};

export default App;
