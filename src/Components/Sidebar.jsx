import  { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { BsWindowPlus } from "react-icons/bs";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
      <div
        className={`fixed top-0 left-0 h-full shadow-xl bg-white w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[78%]"
        }`}
      >
        {/* Sidebar content here */}
        <button
          className="fixed top-9 left-[200px] text-gray-800  text-4xl font-medium"
          onClick={toggleSidebar}
        >
          {isOpen ? "‹‹" : "››"}
        </button>
        <img
          src="/group-84152-1@2x.png"
          width={190}
          className="py-9 px-3"
          alt=""
        />

        <div className="flex items-center px-3 hover:border bg-[#F2F4FF] text-blue-600 font-bold rounded mx-3">
          <FiUsers />
          <h2 className="  p-4 ">Manage User</h2>
        </div>
        <div className="flex items-center px-3 hover:border mx-3">
          <BsWindowPlus />
          <h2 className="  p-4 ">Technical Requests</h2>
        </div>

        {/* Add more content as needed */}
      </div>
      
    </div>
  );
}

export default Sidebar;
