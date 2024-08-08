import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EditProfile from "./EditProfile";
import ResetPassword from "./ResetPassword";
import DeleteUser from "./DeleteUser";

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
      id: "A401",
      fullName: "Hedwig F. Nguyen",
      franchiseName: "KFC",
      email: "ArcuVeasdn@gmail.com",
      lastLogin: "-",
      plan: "Basic",
      status: "Inactive",
    },
    {
      id: "A4f4501",
      fullName: "Hedwig F. Nguyen",
      franchiseName: "BUrger",
      email: "ArcuVeasdnasd@il.com",
      lastLogin: "-",
      plan: "Basic",
      status: "Inactive",
    },
    // ... (other initial data)
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [Reset, setReset] = useState(false);
  const [Delete, setDelete] = useState(false);

  const handleDropdownOpen = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleOptionClick = (id, option) => {
    console.log(`Option clicked for ID ${id}: ${option}`);
    setOpenDropdown(null);
    if (option === "Edit") {
      setIsOpen(true);
    } else if (option === "Reset password") {
      setReset(true);
    } else if (option === "Delete") {
      setDelete(true);
    }
  };

  return (
    <div className="mx-auto overflow-scroll bg-white p-2 rounded">
      <table className="w-full border-collapse rounded">
        <thead>
          <tr className="bg-gray-100 whitespace-nowrap">
            <th className="px-4 py-2 border-b text-left">ID</th>
            <th className="px-4 py-2 border-b text-left">Full Name</th>
            <th className="px-4 py-2 border-b text-left">Franchise Name</th>
            <th className="px-4 py-2 border-b text-left">Email Address</th>
            <th className="px-4 py-2 border-b text-left">Last Login</th>
            <th className="px-4 py-2 border-b text-left">Plan</th>
            <th className="px-4 py-2 border-b text-left">Status</th>
            <th className="px-4 py-2 border-b text-left"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 border-b">{row.id}</td>
              <td className="px-4 py-2 border-b">{row.fullName}</td>
              <td className="px-4 py-2 border-b">{row.franchiseName}</td>
              <td className="px-4 py-2 border-b">{row.email}</td>
              <td className="px-4 py-2 border-b">{row.lastLogin}</td>
              <td className="px-4 py-2 border-b">{row.plan}</td>
              <td className="px-4 py-2 border-b">{row.status}</td>
              <td className="px-4 py-2 border-b relative">
                <button
                  onClick={() => handleDropdownOpen(row.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <BsThreeDotsVertical />
                </button>
                {openDropdown === row.id && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-md z-10">
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick(row.id, "Edit")}
                      >
                        Edit
                      </li>
                      <li
                        className="px-4 max-w-fit whitespace-nowrap py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick(row.id, "Reset password")}
                      >
                        Reset password
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick(row.id, "Delete")}
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

      <div className="flex justify-end p-5 bg-gray-50">
        <Stack spacing={7}>
          <Pagination count={30} shape="rounded" color="primary" />
        </Stack>
      </div>

      {/* Edit Profile Dialog */}
      {isOpen && <EditProfile isOpen={isOpen} setIsOpen={setIsOpen} />}

      {/* Reset Password Dialog */}
      {Reset && <ResetPassword Reset={Reset} setReset={setReset} />}

      {/* Delete User Dialog */}
      {Delete && <DeleteUser Delete={Delete} setDelete={setDelete} />}
    </div>
  );
}

export default Table;