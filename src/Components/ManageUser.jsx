import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IoFilterOutline } from "react-icons/io5";
import { RiDownloadLine } from "react-icons/ri";
import Tables from './Tables'
// ... (other imports remain the same)
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import {
  faUser,
  faBuilding,
  faEnvelope,
  faCalendar,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

function ManageUser() {
  const [openDialog, setOpenDialog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  // ... (other state variables remain the same)

  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [franchiseName, setFranchiseName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("All");
  const [status, setStatus] = useState("All");
  const [openTheSearch, setopenTheSearch] = useState(false);

  const [rows, setRows] = useState([
    {
      id: 1,
      full_name: "Hedwig F. Nguyen",
      franchise: "KFC",
      email: "ArcuvelFoun@gmail.com",
      last_login: "-",
      plan: "Basic",
      status: "Inactive",
    },
    {
      id: 2,
      full_name: "Genevieve U. Watts",
      franchise: "-",
      email: "ArcuVelFoun@gmail.com",
      last_login: "-",
      plan: "Pro",
      status: "Active",
    },
    {
      id: 3,
      full_name: "Genevieve U. Watts",
      franchise: "Google",
      email: "ArcuVelFoun@gmail.com",
      last_login: "12-Oct-2024 10:34:09",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 4,
      full_name: "Genevieve U. Watts",
      franchise: "-",
      email: "ArcuVelFoun@gmail.com",
      last_login: "-",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 5,
      full_name: "Genevieve U. Watts",
      franchise: "-",
      email: "ArcuvelFoun@gmail.com",
      last_login: "-",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 6,
      full_name: "Genevieve U. Watts",
      franchise: "-",
      email: "ArcuVelFoun@gmail.com",
      last_login: "-",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 7,
      full_name: "Genevieve U. Watts",
      franchise: "Primal",
      email: "ArcuvelFoun@gmail.com",
      last_login: "12-Oct-2024 10:34:09",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 8,
      full_name: "Genevieve U. Watts",
      franchise: "Crazzy Phils",
      email: "ArcuvelFoun@gmail.com",
      last_login: "12-Oct-2024 10:34:09",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 9,
      full_name: "Genevieve U. Watts",
      franchise: "Under 500",
      email: "ArcuVelFoun@gmail.com",
      last_login: "12-Oct-2024 10:34:09",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 10,
      full_name: "Genevieve U. Watts",
      franchise: "Fume",
      email: "ArcuvelFoun@gmail.com",
      last_login: "12-Oct-2024 10:34:09",
      plan: "Basic",
      status: "Active",
    },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [newFranchisee, setNewFranchisee] = useState({
    full_name: "",
    franchise: "",
    email: "",
    last_login: "",
    plan: "Basic",
    status: "Active",
  });

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "full_name", headerName: "Full Name", width: 150 },
    { field: "franchise", headerName: "Franchise Name", width: 150 },
    { field: "email", headerName: "Email Address", width: 200 },
    { field: "last_login", headerName: "Last Login", width: 150 },
    { field: "plan", headerName: "Plan", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
          <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
        </div>
      ),
    },
  ];

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewFranchisee({
      full_name: "",
      franchise: "",
      email: "",
      last_login: "",
      plan: "Basic",
      status: "Active",
    });
  };

  const handleChange = (event) => {
    setNewFranchisee({
      ...newFranchisee,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const newId =
      rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
    // Update the rows state directly with the new franchisee
    setRows([
      ...rows,
      {
        id: newId,
        ...newFranchisee,
      },
    ]);
    handleCloseDialog();
  };
  const handleRowSelection = (selectionModel) => {
    setSelectedRows(selectionModel);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg  min-h-screen w-full ml-auto flex-1">
      <div
        className="flex justify-between items-center  my-2
    "
      >
        <h2 className="text-2xl font-bold ml-2 ">Manage User</h2>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          + Add Franchisor
        </Button>
      </div>

      <div className="bg-[#FAFBFA] p-4 rounded-lg">
        <ul className="flex  border-b gap-8">
          <li className=" pb-3 text-center border-b-2 border-blue-500 font-bold">
            Franchisor
          </li>
          <Link to="/franchise">
            {" "}
            <li className=" text-center">Franchisee</li>
          </Link>

          <Link to="sales">
            <li className=" text-center">Sales</li>
          </Link>
        </ul>

        {/* seacrhdiv */}

        <div className="grid grid-cols-3 mt-4 gap-4 mb-6">
          <div className="bg-white px-4 pb-9 pt-4 rounded shadow">
            <h2 className="text-sm text-gray-500 pb-2">Total Franchise</h2>
            <p className="text-2xl font-bold"> {rows.length}</p>
          </div>
          <div className="bg-white px-4 pb-9 pt-4  rounded shadow">
            <h2 className="text-sm text-gray-500">Total Sales</h2>
            <p className="text-2xl font-bold">
              {rows.filter((row) => row.plan === "Pro").length}
            </p>
          </div>
          <div className="bg-white px-4 pb-9 pt-4  rounded shadow">
            <h2 className="text-sm text-gray-500">Total Royalty</h2>
            <p className="text-2xl font-bold">
              {rows.filter((row) => row.plan === "Basic").length}
            </p>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md">
          <div className=" min-h-[20vh] w-full mt-2 rounded-l p-2">
            <div className="container mx-auto p-4 bg-white">
              <div className="flex justify-between mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex space-x-4">
                  <button
                    onClick={() => setopenTheSearch(!openTheSearch)}
                    className="border border-gray-300  text-gray  py-1 px-5 rounded-md flex items-center gap-4 flex-row-reverse"
                  >
                    Filter
                    <IoFilterOutline />
                  </button>
                  <button className="btn btn-outline border-gray-300  flex items-center gap-4 flex-row-reverse">
                    Export
                    <RiDownloadLine />
                  </button>
                </div>
              </div>
              <form
                className={
                  openTheSearch ? "bg-[#F4F7FC] p-4 rounded-lg" : "hidden"
                }
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-4 gap-4 ">
                  <div className="">
                    <label
                      htmlFor="id"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      ID
                    </label>
                    <input
                      type="text"
                      id="id"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="franchiseName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Franchise Name
                    </label>
                    <input
                      type="text"
                      id="franchiseName"
                      value={franchiseName}
                      onChange={(e) => setFranchiseName(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="plan"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Plan
                    </label>
                    <select
                      id="plan"
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="All">All</option>
                      <option value="Plan A">Plan A</option>
                      <option value="Plan B">Plan B</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="All">All</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    className="  text-blue-300  py-2 px-4 rounded-md mr-4"
                  >
                    Clear all
                  </button>
                  <button
                    type="submit"
                    className="bg-[#326DCF] hover:bg-blue-700 text-white  py-2 px-4 rounded-md"
                  >
                    Show Results
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Tables />
      </div>
      <div></div>

      {openDialog && (
        <div className="fixed z-[32] inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add Franchisor</h2>
              <button
                onClick={handleCloseDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="block text-sm font-medium text-gray-700 mb-1"
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
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
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
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
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
              <div className="flex justify-end">
                <button
                  onClick={handleCloseDialog}
                  type="button"
                  className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-gray-200 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUser;
