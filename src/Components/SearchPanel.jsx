
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IoFilterOutline } from "react-icons/io5";
import { RiDownloadLine } from "react-icons/ri";
import Tables from "./Tables";
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




const SearchPanel = () => {
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
  return (
    <div>
      {" "}
      <div className="flex items-center flex-col lg:flex-row gap-3 justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md border w-full md:w-1/2 border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-col gap-4 md:flex-row space-x-4">
          <button
            onClick={() => setopenTheSearch(!openTheSearch)}
            className="border border-gray-300  text-gray text-[1rem] py-1 px-5 rounded-md flex items-center gap-4 flex-row-reverse"
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
        className={openTheSearch ? "bg-[#F4F7FC] p-4 rounded-lg" : "hidden"}
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
  );
}

export default SearchPanel