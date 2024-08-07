import  { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



function Table() { const [tableData, setTableData] = useState([
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
    id: "A10s1",
    fullName: "Hedwig F. Nguyen",
    franchiseName: "KFC",
    email: "ArcuVelFoun@gmail.com",
    lastLogin: "-",
    plan: "Basic",
    status: "Inactive",
  },
  {
    id: "A13401",
    fullName: "Hedwig F. Nguyen",
    franchiseName: "KFC",
    email: "ArcuVelFoun@gmail.com",
    lastLogin: "-",
    plan: "Basic",
    status: "Inactive",
  },
  {
    id: "A10154",
    fullName: "Hedwig F. Nguyen",
    franchiseName: "KFC",
    email: "ArcuVelFoun@gmail.com",
    lastLogin: "-",
    plan: "Basic",
    status: "Inactive",
  },
  {
    id: "A17601",
    fullName: "HedwigdsfNguyen",
    franchiseName: "KFC",
    email: "ArcuVelFoun@gmail.com",
    lastLogin: "-",
    plan: "Basic",
    status: "Inactive",
  },
  {
    id: "A10361",
    fullName: "Hedwisdf ",
    franchiseName: "KFC",
    email: "ArcuVelFoun@gmail.com",
    lastLogin: "-",
    plan: "Basic",
    status: "Inactive",
  },
  // ... (other initial data)
]);

const [openDropdown, setOpenDropdown] = useState(null);
const [isOpen, setIsOpen] = useState(false);
const [Reset, setReset] = useState(false);
const [openDialog, setOpenDialog] = useState(false);

// State for new franchisor
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleDropdownOpen = (id) => {
  setOpenDropdown(openDropdown === id ? null : id);
};

const handleDropdownClose = () => {
  setOpenDropdown(null);
};

const handleClose = () => {
  setIsOpen(false);
};

const handleCloseDialog = () => {
  setOpenDialog(false);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newFranchisor = {
    id: `A${tableData.length + 101}`,
    fullName: `${firstName} ${lastName}`,
    franchiseName: "New Franchise", // You might want to add this to your form
    email: email,
    lastLogin: "-",
    plan: "Basic", // Default plan, you might want to add this to your form
    status: "Active", // Default status, you might want to add this to your form
  };
  setTableData([...tableData, newFranchisor]);
  handleCloseDialog();
  // Reset form fields
  setFirstName("");
  setLastName("");
  setEmail("");
  setPassword("");
};

const handleOptionClick = (id, option) => {
  console.log(`Option clicked for ID ${id}: ${option}`);
  setOpenDropdown(null);
  if (option === 'Edit') {
    setIsOpen(true);
  } else if (option === 'Reset password') {
    setReset(true);
  } else if (option === 'Delete') {
    // Implement delete functionality
    console.log(`Delete user with ID: ${id}`);
  }
  };

  return (
    <div className="mx-auto overflow-scroll bg-white p-2 rounded">
     
      <table className="w-full border-collapse rounded">
        {/* ... (table head remains the same) ... */}
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
                  <BsThreeDotsVertical />
                </button>
                {/* ... (dropdown menu remains the same) ... */}  {openDropdown === row.id && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-md z-10">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(row.id, 'Edit')}
                    >
                      Edit
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(row.id, 'Reset password')}
                    >
                      Reset password
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(row.id, 'Delete')}
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

      {/* Add Franchisor Dialog */}
      {openDialog && (
        <div className="fixed z-[32] inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md w-full max-w-md">
            <div className="flex rounded-lg items-center justify-between mb-4 bg-gray-50 p-2">
              <h2 className="p-3 font-semibold">Add Franchisor</h2>
              <button
                onClick={handleCloseDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                <MdClose className="text-xl text-black box-border mr-2 mb-2" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4 p-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="mb-4 px-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-6 px-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Create a password for the user"
                />
              </div>
              <div className="flex justify-end p-5">
                <button
                  onClick={handleCloseDialog}
                  type="button"
                  className="gray-btn mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="blue-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex justify-end p-5 bg-gray-50">
      <Stack spacing={7}>
      <Pagination count={30} shape="rounded" color="primary" />
    </Stack>
      </div>

      {/* ... (other dialogs remain the same) ... */}
    </div>
  );
}

export default Table;