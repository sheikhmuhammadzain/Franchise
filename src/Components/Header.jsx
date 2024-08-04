import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div
      className="w-100 border w-full h-15 shadow-md fixed top-0 left-0 z-1 bg-white
     "
    >
      <div className="flex items-center justify-end p-4 gap-3">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="text-2xl border rounded-full p-1 m-1"
          >
            <FaRegBell />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1]  min-w-52 p-2 shadow"
          >
            <div className="flex py-2 px-4 border-b justify-between items-center gap-9">
              <h1 className="font-bold text-xl">Notification</h1>
              <button className="btn btn-active bg-[#326DCF] text-white">
                new
              </button>
            </div>
            <div className="flex items-center justify-between gap-16 p-4">
              <FaRegBell className="text-4xl hover:border" />
              <h1>A new sale Account has been created for john</h1>
            </div>
          </ul>
        </div>
        <Link to="/login">
          <FaUser className="text-3xl  rounded-full p-2   bg-[#326DCF]  text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
