import React, { useState } from "react";

function Table() {
  const [tableData, setTableData] = useState([
    {
      id: "A101",
      fullName: "Hedwig F. Nguyen",
      franchiseName: "KFC",
      email: "ArcuVelFoun@gmail.com",
      lastLogin: "-",
      plan: "Basic",
      status: "Inactive",
    },
    {
      id: "A102",
      fullName: "John Doe",
      franchiseName: "Subway",
      email: "john.doe@example.com",
      lastLogin: "2023-08-01",
      plan: "Premium",
      status: "Active",
    },
    {
      id: "A103",
      fullName: "Jane Smith",
      franchiseName: "McDonald's",
      email: "jane.smith@example.com",
      lastLogin: "2023-07-15",
      plan: "Basic",
      status: "Inactive",
    },
    {
      id: "A104",
      fullName: "Alice Johnson",
      franchiseName: "Starbucks",
      email: "alice.johnson@example.com",
      lastLogin: "2023-08-05",
      plan: "Basic",
      status: "Active",
    },
    {
      id: "A105",
      fullName: "Bob Brown",
      franchiseName: "Pizza Hut",
      email: "bob.brown@example.com",
      lastLogin: "2023-06-30",
      plan: "Premium",
      status: "Inactive",
    },
    // Add more rows as needed
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [Reset, setReset] = useState(false); // Set to false initially if you want to control opening from outside

  const handleDropdownOpen = (id) => {
    setOpenDropdown(id);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };
  const [isOpen, setIsOpen] = useState(false); // Set to false initially if you want to control opening from outside

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (id, option) => {
    console.log(`Option clicked for ID ${id}: ${option}`);
    setOpenDropdown(null);
    // Handle option logic here
  };

  return (
    <div className="mx-auto overflow-scroll bg-white p-2 rounded">
      <table className="w-full border-collapse rounded">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Full Name</th>
            <th className="px-4 py-2 border-b">Franchise Name</th>
            <th className="px-4 py-2 border-b">Email Address</th>
            <th className="px-4 py-2 border-b">Last Login</th>
            <th className="px-4 py-2 border-b">Plan</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={row.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-1 py-2 border-b">{row.id}</td>
              <td className="px-4 py-2 border-b">{row.fullName}</td>
              <td className="px-4 py-2 border-b">{row.franchiseName}</td>
              <td className="px-4 py-2 border-b">{row.email}</td>
              <td className="px-4 py-2 border-b">{row.lastLogin}</td>
              <td className="px-4 py-2 border-b">{row.plan}</td>
              <td className="px-4 py-2 border-b">{row.status}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleDropdownOpen(row.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M9 5h12m0 0l-3 3m3-3l-3 3m3-3l-3 3m3-3l-3 3m3-3l-3 3"
                    />
                  </svg>
                </button>

                {openDropdown === row.id && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-md">
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setIsOpen(true)}
                      >
                        Edit
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={()=>setReset(true)} 
                      >
                        Reset password
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        // onClick={()=>setIsResetOpen(true)}
                      >
                        Delete
                      </li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className={`fixed bg-[#3333334d] inset-0 z-50 flex justify-center items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg p-8">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue="Hedwig"
                className="mt-1 block w-full rounded-md border-gray-400 border p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                defaultValue="Nguyen"
                className="mt-1 block border p-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            {" "}
             
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue="ArcuVelFoun@gmail.com"
              className="mt-1 block border p-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div
            className="mt-4   
 grid grid-cols-2 gap-4"
          >
            <div>
              <label
                htmlFor="lastLogin"
                className="block text-sm font-medium text-gray-700"
              >
                Last Login
              </label>
              <input
                type="text"
                id="lastLogin"
                name="lastLogin"
                value="12-Oct-2024 10:34:09"
                className="mt-1 border p-1  block w-full rounded-md border-gray-300 shadow-sm read-only"
                disabled
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="active">Active</option>  
                <option value="active">Not Active</option>  
                {/* Add other options as needed */}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-4"
            >
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {" "}
                Update
            </button>
          </div>
        </div>

        {/* resetpop */}
        
      </div>



      <div
          className={`fixed inset-0 bg-[#1a1a1a3d] z-50 flex justify-center items-center ${
            Reset ? "block" : "hidden"
          }`}
        >
          <div className="bg-white rounded-lg p-6">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setReset(false)}
            > X
            </button>  

            {/* resetpasswordsection */}

            <h2 className="text-lg font-semibold mb-4">Reset Password</h2>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500   
 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div
              className="flex   
 justify-end"
            >
              <button onClick={()=>setReset(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-4">
                Cancel  
              </button>
              <button onClick={() => setReset(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Reset
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Table;
