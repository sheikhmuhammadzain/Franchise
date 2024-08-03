import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-100 border w-full h-15 shadow-lg">
      <div className="flex items-center justify-end p-5 gap-3">
        <FaRegBell className="text-5xl border rounded-full p-2" />
        <Link to='/login'>
          <FaUser className="text-5xl border rounded-full p-3 bg-blue-500 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
