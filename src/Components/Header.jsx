import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Menu } from '@headlessui/react';
import { FiBell, FiUser } from 'react-icons/fi';
import { IoLogOutOutline } from "react-icons/io5";
import Notification from "./Notification";

const Header = () => {
  return (
    <div
      className="w-100 border w-full h-15 shadow-md fixed top-0 left-0 z-20 bg-white
     "
    >
      <div className="flex items-center justify-end p-4 gap-3">
     <Notification/>
       
        <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="flex items-center space-x-2">
                <FiUser className="w-8 h-8 p-1 text-white bg-blue-800 rounded-full " />
              </Menu.Button>
            </div>

            {open && (
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg outline-none"
              >
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg font-semibold">John Doe</div>
                  </div>
                  <div className="text-sm text-gray-500">johndoe@gmail.com</div>
                </div>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/login"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex items-center p-2 space-x-2 text-gray-700`}
                    >
                      <FiUser className="w-5 h-5" />
                      <Link to="/login"><span>Profile</span></Link>
                      
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/login"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex items-center p-2 space-x-2 text-red-600`}
                    >
                     <IoLogOutOutline />

                      <span>Sign Out</span>
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
      </div>
    </div>
  );
};

export default Header;
