import { FaAngleDoubleRight } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsWindowPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState } from "react";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white z-10 shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-[80%]"
      }`}
      style={{ width: "200px" }}
    >
      <div className="flex items-center justify-between p-4">
        <img src="/group-84152-1@2x.png" alt="" width={144} />
        <MdKeyboardDoubleArrowLeft
          className="text-xl"
          onClick={toggleSidebar}
        />
      </div>
      <div className="flex items-center px-3 hover:underline bg-[#F2F4FF] text-blue-600 font-bold rounded mx-3">
        <FiUsers className="text-xl" />
        <Link to="/">
          <h2 className="p-3">Manage User</h2>
        </Link>
      </div>
      <div className="flex items-center px-3 hover:underline mx-3">
        <HiOutlinePresentationChartBar className="text-xl" />
        <Link to="/adminPanel">
          <h2 className="p-3 min-w-fit">Financial Overview</h2>
        </Link>
      </div>
      <div className="flex items-center px-3 hover:underline mx-3">
        <BsWindowPlus className="text-xl" />
        <h2 className=" text p-3 ">Technical Requests</h2>
      </div>
    </aside>
  );
}

export default Sidebar;
