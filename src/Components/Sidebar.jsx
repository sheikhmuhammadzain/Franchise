import { useState } from "react";
import PropTypes from "prop-types";
import { FiUsers } from "react-icons/fi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { BsWindowPlus } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const buttons = [
    {
      id: "manageUser",
      icon: <FiUsers className="text-xl" />,
      linkTo: "/",
      text: "Manage User",
    },
    {
      id: "financialOverview",
      icon: <HiOutlinePresentationChartBar className="text-xl" />,
      linkTo: "/adminPanel",
      text: "Financial Overview",
    },
    {
      id: "technicalRequests",
      icon: <BsWindowPlus className="text-xl" />,
      linkTo: "/technical",
      text: "Technical Requests",
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white z-30 shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-[80%]"
      }`}
      style={{ width: "220px" }}
    >
      <div className="flex items-center justify-between p-4">
        <img src="/group-84152-1@2x.png" alt="Logo" width={144} />
        <MdKeyboardDoubleArrowLeft
          className="text-xl cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="flex flex-col">
        {buttons.map((button) => (
          <div key={button.id}>
            <Link to={button.linkTo}>
              <div
                className={`flex items-center text-sm px-3 py-2 font-bold rounded mx-3 cursor-pointer hover:bg-[#F2F4FF] hover:text-blue-400 ${
                  location.pathname === button.linkTo
                    ? "bg-[#F2F4FF] text-blue-400"
                    : "bg-white text-gray-900"
                }`}
              >
                {button.icon}
                <span className={`ml-2 ${isOpen ? "block" : "hidden"}`}>
                  {button.text}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;