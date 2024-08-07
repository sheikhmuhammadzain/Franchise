// import { BsThreeDotsVertical } from "react-icons/bs";
// import { MdClose } from "react-icons/md";

// import { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { MdClose } from "react-icons/md";
// import { IoFilterOutline } from "react-icons/io5";
// import { RiDownloadLine } from "react-icons/ri";
// import { IoMdAdd } from "react-icons/io";

// import Tables from './Tables'
// // ... (other imports remain the same)
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   Box,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { Input } from "@chakra-ui/react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   Typography,
//   Grid,
// } from "@mui/material";
// import {
//   faUser,
//   faBuilding,
//   faEnvelope,
//   faCalendar,
//   faCheckCircle,
//   faTimesCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../index.css";

// function ManageUser() {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   // ... (other state variables remain the same)

//   const [id, setId] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [franchiseName, setFranchiseName] = useState("");
//   const [email, setEmail] = useState("");
//   const [plan, setPlan] = useState("All");
//   const [status, setStatus] = useState("All");
//   const [openTheSearch, setopenTheSearch] = useState(false);

//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       full_name: "Hedwig F. Nguyen",
//       franchise: "KFC",
//       email: "ArcuvelFoun@gmail.com",
//       last_login: "-",
//       plan: "Basic",
//       status: "Inactive",
//     },
//     {
//       id: 2,
//       full_name: "Genevieve U. Watts",
//       franchise: "-",
//       email: "ArcuVelFoun@gmail.com",
//       last_login: "-",
//       plan: "Pro",
//       status: "Active",
//     },
//     {
//       id: 3,
//       full_name: "Genevieve U. Watts",
//       franchise: "Google",
//       email: "ArcuVelFoun@gmail.com",
//       last_login: "12-Oct-2024 10:34:09",
//       plan: "Basic",
//       status: "Active",
//     },
//     {
//       id: 4,
//       full_name: "Genevieve U. Watts",
//       franchise: "-",
//       email: "ArcuVelFoun@gmail.com",
//       last_login: "-",
//       plan: "Basic",
//       status: "Active",
//     },
//     {
//       id: 5,
//       full_name: "Genevieve U. Watts",
//       franchise: "-",
//       email: "ArcuvelFoun@gmail.com",
//       last_login: "-",
//       plan: "Basic",
//       status: "Active",
//     },
//     {
//       id: 6,
//       full_name: "Genevieve U. Watts",
//       franchise: "-",
//       email: "ArcuVelFoun@gmail.com",
//       last_login: "-",
//       plan: "Basic",
//       status: "Active",
//     },
//     {
//       id: 7,
//       full_name: "Genevieve U. Watts",
//       franchise: "Primal",
//       email: "ArcuvelFoun@gmail.com",
//       last_login: "12-Oct-2024 10:34:09",
//       plan: "Basic",
//       status: "Active",
//     },
//     {
//       id: 8,
//       full_name: "Genevieve U. Watts",
//       franchise: "Crazzy Phils",
//       email: "ArcuvelFoun@gmail.com",
//       last_login: "12-Oct-2024 10:34:09",
//       plan: "Basic",
//       status: "Active",
//     },
//     {
//       id: 9,
//       full_name: "Genevieve U. Watts",
//       franchise: "Under 500",
//       email: "ArcuVelFoun@gmail.com",
//       last_login: "12-Oct-2024 10:34:09",
//       plan: "Basic",
//       status: "Active",
//     },
//     {
//       id: 10,
//       full_name: "Genevieve U. Watts",
//       franchise: "Fume",
//       email: "ArcuvelFoun@gmail.com",
//       last_login: "12-Oct-2024 10:34:09",
//       plan: "Basic",
//       status: "Active",
//     },
//   ]);

//   const [selectedRows, setSelectedRows] = useState([]);
//   const [newFranchisee, setNewFranchisee] = useState({
//     full_name: "",
//     franchise: "",
//     email: "",
//     last_login: "",
//     plan: "Basic",
//     status: "Active",
//   });

//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "full_name", headerName: "Full Name", width: 150 },
//     { field: "franchise", headerName: "Franchise Name", width: 150 },
//     { field: "email", headerName: "Email Address", width: 200 },
//     { field: "last_login", headerName: "Last Login", width: 150 },
//     { field: "plan", headerName: "Plan", width: 100 },
//     { field: "status", headerName: "Status", width: 100 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 100,
//       renderCell: (params) => (
//         <div className="flex items-center gap-2">
//           <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
//           <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
//         </div>
//       ),
//     },
//   ];

//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setNewFranchisee({
//       full_name: "",
//       franchise: "",
//       email: "",
//       last_login: "",
//       plan: "Basic",
//       status: "Active",
//     });
//   };

//   const handleChange = (event) => {
//     setNewFranchisee({
//       ...newFranchisee,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     const newId =
//       rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
//     // Update the rows state directly with the new franchisee
//     setRows([
//       ...rows,
//       {
//         id: newId,
//         ...newFranchisee,
//       },
//     ]);
//     handleCloseDialog();
//   };
//   const handleRowSelection = (selectionModel) => {
//     setSelectedRows(selectionModel);
//   };

//   return (
//     <div className="bg-gray-50 p-4 rounded-lg  min-h-screen w-[calc(100%-200px)] mt-[80px] px-8 ml-auto flex-1">
//       <div
//         className="flex flex-col items-center justify-between gap-3 my-2 lg:flex-row "
//       >
//         <h2 className="ml-2 text-2xl font-bold "  >Manage User</h2>
//         <button  className="blue-btn flex max-w-fit font-normal" onClick={handleOpenDialog}>
//            <span className='mr-2 text-2xl font-thin'><IoMdAdd />
//            </span>  Add Franchisor
//         </button>
//       </div>

//       <div className="bg-[#FAFBFA] p-4 rounded-lg">
//         <ul className="flex flex-col gap-8 border-b lg:flex-row">
//           <li className="pb-3 font-bold text-center text-blue-500 border-b border-blue-500 ">
//             Franchisor
//           </li>
//           <Link to="/franchise">
//             {" "}
//             <li className="text-center ">Franchisee</li>
//           </Link>

//           <Link to="sales">
//             <li className="text-center ">Sales</li>
//           </Link>
//         </ul>

//         {/* seacrhdiv */}

//         <div className="grid grid-cols-1 gap-4 mt-4 mb-6 lg:grid-cols-3">
//           <div className="px-4 pt-4 bg-white rounded shadow pb-9">
//             <h2 className="pb-2 text-sm font-medium text-gray-500">Total Franchisor</h2>
//             <p className="text-2xl font-bold"> {rows.length}</p>
//           </div>
//           <div className="px-4 pt-4 bg-white rounded shadow pb-9">
//             <h2 className="text-sm font-medium text-gray-500 " >Pro Plan </h2>
//             <p className="text-2xl font-bold">
//               {rows.filter((row) => row.plan === "Pro").length}
//             </p>
//           </div>
//           <div className="px-4 pt-4 bg-white rounded shadow pb-9">
//             <h2 className="text-sm font-medium text-gray-500">Base Plan</h2>
//             <p className="text-2xl font-bold">
//               {rows.filter((row) => row.plan === "Basic").length}
//             </p>
//           </div>
//         </div>
//         <div className="p-2 bg-white rounded-md">
//           <div className="w-full mt-2 rounded-l ">
//             <div className="container  mx-auto bg-white">
//               <div className="flex flex-col items-center justify-between gap-3 mb-4 lg:flex-row">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 <div className="flex flex-col gap-4 space-x-4 md:flex-row">
//                   <button
//                     onClick={() => setopenTheSearch(!openTheSearch)}
//                     className="border border-gray-300  text-gray text-[1rem] py-1 px-5 rounded-md flex items-center gap-4 flex-row-reverse"
//                   >
//                     Filter
//                     <IoFilterOutline />
//                   </button>
//                   <button className="flex flex-row-reverse items-center gap-4 border-gray-300 btn btn-outline">
//                     Export
//                     <RiDownloadLine />
//                   </button>
//                 </div>

//               </div>
//               {/* search-from */}
//               <form
//                 className={
//                   openTheSearch ? "bg-[#F4F7FC] p-4 rounded-lg" : "hidden"
//                 }
//                 onSubmit={handleSubmit}
//               >
//                 <div className="grid grid-cols-4 gap-4 ">
//                   <div className="">
//                     <label
//                       htmlFor="id"
//                       className="block mb-2 text-sm font-bold text-gray-700"
//                     >
//                       ID
//                     </label>
//                     <input
//                       type="text"
//                       id="id"
//                       value={id}
//                       onChange={(e) => setId(e.target.value)}
//                       className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="fullName"
//                       className="block mb-2 text-sm font-bold text-gray-700"
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="franchiseName"
//                       className="block mb-2 text-sm font-bold text-gray-700"
//                     >
//                       Franchise Name
//                     </label>
//                     <input
//                       type="text"
//                       id="franchiseName"
//                       value={franchiseName}
//                       onChange={(e) => setFranchiseName(e.target.value)}
//                       className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-bold text-gray-700"
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <label
//                       htmlFor="plan"
//                       className="block mb-2 text-sm font-bold text-gray-700"
//                     >
//                       Plan
//                     </label>
//                     <select
//                       id="plan"
//                       value={plan}
//                       onChange={(e) => setPlan(e.target.value)}
//                       className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     >
//                       <option value="All">All</option>
//                       <option value="Plan A">Plan A</option>
//                       <option value="Plan B">Plan B</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="status"
//                       className="block mb-2 text-sm font-bold text-gray-700"
//                     >
//                       Status
//                     </label>
//                     <select
//                       id="status"
//                       value={status}
//                       onChange={(e) => setStatus(e.target.value)}
//                       className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     >
//                       <option value="All">All</option>
//                       <option value="Active">Active</option>
//                       <option value="Inactive">Inactive</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="flex justify-end mt-6">
//                   <button
//                     type="button"
//                     className="px-4 py-2 mr-4 text-blue-300 rounded-md "
//                   >
//                     Clear all
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-[#326DCF] hover:bg-blue-700 text-white  py-2 px-4 rounded-md"
//                   >
//                     Show Results
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//       </div>
//       <div></div>

//     </div>
//   );
// }

// export default ManageUser;

import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { RiDownloadLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditProfile from "./EditProfile";
import ResetPassword from "./ResetPassword";
import DeleteUser from "./DeleteUser";

function ManageUser() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [Reset, setReset] = useState(false);
  const [Delete, setDelete] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [franchiseName, setFranchiseName] = useState("");
  const [plan, setPlan] = useState("All");
  const [status, setStatus] = useState("All");
  const [openTheSearch, setopenTheSearch] = useState(false);

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
      id: "A1321",
      fullName: "Hedwig F. Nguyen",
      franchiseName: "Ksdf",
      email: "ArcuVeln@gmail.com",
      lastLogin: "-",
      plan: "Pro",
      status: "active",
    },
    // ... (other initial data)
  ]);

  const handleDropdownOpen = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFranchisor = {
      id: `A${tableData.length + 101}`,
      fullName: `${firstName} ${lastName}`,
      franchiseName: "New Franchise",
      email: email,
      lastLogin: "-",
      plan: "Basic",
      status: "Active",
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
    if (option === "Edit") {
      setIsOpen(true);
    } else if (option === "Reset password") {
      setReset(true);
    } else if (option === "Delete") {
      // Implement delete functionality
      setDelete(true);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg min-h-screen w-[calc(100%-200px)] mt-[80px] px-8 ml-auto flex-1">
      <div className="flex flex-col items-center justify-between gap-3 my-2 lg:flex-row">
        <h2 className="ml-2 text-2xl font-bold">Manage User</h2>
        <button
          className="blue-btn flex max-w-fit font-normal"
          onClick={() => setOpenDialog(true)}
        >
          <span className="mr-2 text-2xl font-thin">
            <IoMdAdd />
          </span>{" "}
          Add Franchisor
        </button>
      </div>

      <div className="bg-[#FAFBFA] p-4 rounded-lg">
        <ul className="flex flex-col gap-8 border-b lg:flex-row">
          <li className="pb-3 font-bold text-center text-blue-500 border-b border-blue-500">
            Franchisor
          </li>
          <Link to="/franchise">
            <li className="text-center">Franchisee</li>
          </Link>
          <Link to="/sales">
            <li className="text-center">Sales</li>
          </Link>
        </ul>

        <div className="grid grid-cols-1 gap-4 mt-4 mb-6 lg:grid-cols-3">
          <div className="px-4 pt-4 bg-white rounded shadow pb-9">
            <h2 className="pb-2 text-sm font-medium text-gray-500">
              Total Franchisor
            </h2>
            <p className="text-2xl font-bold">{tableData.length}</p>
          </div>
          <div className="px-4 pt-4 bg-white rounded shadow pb-9">
            <h2 className="text-sm font-medium text-gray-500">Pro Plan</h2>
            <p className="text-2xl font-bold">
              {tableData.filter((row) => row.plan === "Pro").length}
            </p>
          </div>
          <div className="px-4 pt-4 bg-white rounded shadow pb-9">
            <h2 className="text-sm font-medium text-gray-500">Base Plan</h2>
            <p className="text-2xl font-bold">
              {tableData.filter((row) => row.plan === "Basic").length}
            </p>
          </div>
        </div>

        <div className="p-2 bg-white rounded-md">
          <div className="w-full mt-2 rounded-l">
            <div className="container mx-auto bg-white">
              <div className="flex flex-col items-center justify-between gap-3 mb-4 lg:flex-row">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex flex-col gap-4 space-x-4 md:flex-row">
                  <button
                    onClick={() => setopenTheSearch(!openTheSearch)}
                    className="border border-gray-300 text-gray text-[1rem] py-1 px-5 rounded-md flex items-center gap-4 flex-row-reverse"
                  >
                    Filter <IoFilterOutline />
                  </button>
                  <button className="flex flex-row-reverse items-center gap-4 border-gray-300 btn btn-outline">
                    Export <RiDownloadLine />
                  </button>
                </div>
              </div>

              {/* Search form */}
              {openTheSearch && (
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
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        ID
                      </label>
                      <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="franchiseName"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        Franchise Name
                      </label>
                      <input
                        type="text"
                        id="franchiseName"
                        value={franchiseName}
                        onChange={(e) => setFranchiseName(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="plan"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        Plan
                      </label>
                      <select
                        id="plan"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      >
                        <option value="All">All</option>
                        <option value="Plan A">Plan A</option>
                        <option value="Plan B">Plan B</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="status"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        Status
                      </label>
                      <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                      className="px-4 py-2 mr-4 text-blue-300 rounded-md "
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
              )}

              {/* Table */}
              <div className="overflow-x-auto"><table className="w-full border-collapse rounded whitespace-nowrap ">
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
                      <td className="px-4 py-2 border-b">
                        {row.franchiseName}
                      </td>
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
                            <ul className="py-2 ">
                              <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleOptionClick(row.id, "Edit")
                                }
                              >
                                Edit
                              </li>
                              <li
                                className="px-4 max-w-fit whitespace-nowrap py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleOptionClick(row.id, "Reset password")
                                }
                              >
                                Reset password
                              </li>
                              <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleOptionClick(row.id, "Delete")
                                }
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
              </table></div>
              
            </div>
          </div>
        </div>
      </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4 px-5">
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

      {/* Edit Profile Dialog */}
      {isOpen && <EditProfile isOpen={isOpen} setIsOpen={setIsOpen} />}
      {Reset && <ResetPassword Reset={Reset} setReset={setReset} />}
      {Delete && <DeleteUser Delete={Delete} setDelete={setDelete} />}

      {/* Delete User Dialog */}
    </div>
  );
}

export default ManageUser;
