import { FaAngleDoubleRight } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsWindowPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="flex  py-10 px-4 bg-gray-50 h-screen">
          <FaAngleDoubleRight className="text-2xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-white text-base-content min-h-full w-60 p-4">
          {/* Sidebar content here */}
          <img
            src="/group-84152-1@2x.png"
            alt=""
            width={200}
            className="p-2 mb-9"
          />
          <div className="flex items-center px-3 hover:border bg-[#F2F4FF] text-blue-600 font-bold rounded mx-3">
            <FiUsers className="text-xl" />
            <Link to="/">
              <h2 className="p-4">Manage User</h2>
            </Link>
          </div>
          <div className="flex items-center px-3 hover:border mx-3">
            <HiOutlinePresentationChartBar className="text-xl" />
            <Link to="/adminPanel">
              <h2 className="p-4">Financial Overview</h2>
            </Link>
          </div>
          <div className="flex items-center px-3 hover:border mx-3">
            <BsWindowPlus className="text-xl" />
            <h2 className=" text p-4 ">Technical Requests</h2>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
