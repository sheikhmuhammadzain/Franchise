import { FaRegBell } from 'react-icons/fa';

const Notification = () => {
  return (
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
          className="dropdown-content menu bg-base-100 rounded-box z-[1] min-w-52 p-2 shadow"
        >
          <div className="flex py-2 px-4 border-b justify-between items-center gap-9">
            <h1 className="font-bold text-xl">Notification</h1>
            <button className="btn btn-active bg-[#326DCF] text-white">
              3 New
            </button>
          </div>
          <li className="flex items-center justify-between gap-4 p-3 border-b">
            <div className="flex gap-3">
            <FaRegBell className="text-6xl bg-gray-50  text-gray-300 rounded-full" />
            <div className="">
            <h1 className="text-sm">A new sales account has been created for 'John'</h1>
            <span className="text-gray-500 text-xs">45 min ago</span>
            </div>         
            </div>
           
          </li>
          <li className="flex items-center justify-between gap-4 p-3 border-b">
            <div className="flex gap-3">
            <FaRegBell className="text-6xl bg-gray-50  text-gray-300 rounded-full" />
            <div className="">
            <h1 className="text-sm">A new sales account has been created for 'John'</h1>
            <span className="text-gray-500 text-xs">45 min ago</span>
            </div>         
            </div>
           
          </li>
          <li className="flex items-center justify-between gap-4 p-3 border-b">
            <div className="flex gap-3">
            <FaRegBell className="text-6xl bg-gray-50  text-gray-300 rounded-full" />
            <div className="">
            <h1 className="text-sm">A new sales account has been created for 'John'</h1>
            <span className="text-gray-500 text-xs">45 min ago</span>
            </div>         
            </div>
           
          </li>
          
       
         
        </ul>
      </div>
    </div>
  );
};

export default Notification;
