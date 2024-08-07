import  { useState } from "react";
import SearchPanel from "./SearchPanel";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Tables from "./Tables";
import TechnicalTable from "./TechnicalTable";

const TechnicalRequests = () => {
  // Mock data - replace with actual data fetching logic
  const requests = [
    {
      id: "TR01",
      userId: "A102",
      fullName: "Hoàng T. Nguyễn",
      userType: "Franchisor",
      requestTitle: "Cannot update profile info",
      dateSubmitted: "12-Oct-2024",
      status: "Pending",
    },
    // ... more requests
  ];

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({
    status: "",
    userType: "",
  });

  const handleFilterChange = (event) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [event.target.name]: event.target.value,
    }));
  };


  return (
    <div className="p-8 bg-[#FAFBFA] w-full">
      <div className="flex item-center justify-between">
        <h1 className="text-2xl font-bold mb-6">Technical Requests</h1>
        <select className="p-1 my-2 border rounded">
          <option>Yearly</option>
          <option>Monthly</option>
          <option>Daily</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white px-4 pb-9 pt-4 rounded shadow">
          <h2 className="text-sm text-gray-500 pb-2">Total </h2>
          <p className="text-2xl font-bold">20</p>
        </div>
        <div className="bg-white px-4 pb-9 pt-4  rounded shadow">
          <h2 className="text-sm text-gray-500">Pending</h2>
          <p className="text-2xl font-bold">$90,000</p>
        </div>
        <div className="bg-white px-4 pb-9 pt-4  rounded shadow">
          <h2 className="text-sm text-gray-500">Resolved</h2>
          <p className="text-2xl font-bold">$6000</p>
        </div>
      </div>
      <div className="bg-white p-2 rounded-lg">
        <SearchPanel />






        <TechnicalTable />





      </div>
    </div>
  );
};

export default TechnicalRequests;
