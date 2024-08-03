import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex-1">
      <div className="w-100 border w-full h-20 shadow-md">
        <div className="flex items-center justify-end p-3 gap-3">
          <IoIosNotifications className="text-3xl" />
          <FaUser className="text-2xl" />
        </div>
      </div>
      <div className="h-full bg-gray-50 w-full p-8">
        <div className="flex items-center justify-between p-2">
          <h1 className="text-4xl font-medium">Manage User</h1>
          <button className="text-white bg-blue-700 px-5 py-3 rounded-lg">
            + Add Francshisor
          </button>
        </div>
      </div>
      <div className="p-8">
        <div>
          <h1>Frans</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
