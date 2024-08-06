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

  const handleDropdownOpen = (id) => {
    setOpenDropdown(id);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
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
                        onClick={() => handleOptionClick(row.id, "edit")}
                      >
                        Edit
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleOptionClick(row.id, "reset_password")
                        }
                      >
                        Reset password
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick(row.id, "delete")}
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
    </div>
  );
}

export default Table;
