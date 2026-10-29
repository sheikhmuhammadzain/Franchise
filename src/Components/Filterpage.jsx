import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import { DataGrid } from "@mui/x-data-grid";

const data = [
  {
    id: "A101",
    fullName: "Hedwig F. Nguyen",
    franchiseName: "KFC",
    emailAddress: "ArcuVelFoun@gmail.com",
    lastLogin: "12-Oct-2024 10:34:09",
    plan: "Pro",
    status: "Inactive",
  },
  {
    id: "A102",
    fullName: "Genevieve U. Watts",
    franchiseName: "-",
    emailAddress: "ArcuVelFoun@gmail.com",
    lastLogin: "12-Oct-2024 10:34:09",
    plan: "Basic",
    status: "Active",
  },
  {
    id: "A103",
    fullName: "Genevieve U. Watts",
    franchiseName: "Google",
    emailAddress: "ArcuVelFoun@gmail.com",
    lastLogin: "12-Oct-2024 10:34:09",
    plan: "Basic",
    status: "Active",
  },
  {
    id: "A104",
    fullName: "Genevieve U. Watts",
    franchiseName: "-",
    emailAddress: "ArcuVelFoun@gmail.com",
    lastLogin: "12-Oct-2024 10:34:09",
    plan: "Basic",
    status: "Active",
  },
  {
    id: "A105",
    fullName: "Genevieve U. Watts",
    franchiseName: "-",
    emailAddress: "ArcuVelFoun@gmail.com",
    lastLogin: "12-Oct-2024 10:34:09",
    plan: "Basic",
    status: "Active",
  },
  {
    id: "A106",
    fullName: "Genevieve U. Watts",
    franchiseName: "-",
    emailAddress: "ArcuVelFoun@gmail.com",
    lastLogin: "12-Oct-2024 10:34:09",
    plan: "Basic",
    status: "Active",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Full Name", width: 200 },
  { field: "franchiseName", headerName: "Franchise Name", width: 200 },
  { field: "emailAddress", headerName: "Email Address", width: 250 },
  { field: "lastLogin", headerName: "Last Login", width: 180 },
  { field: "plan", headerName: "Plan", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
];

const FranchiseTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [planValue, setPlanValue] = useState("All");
  const [statusValue, setStatusValue] = useState("All");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handlePlanChange = (event) => {
    setPlanValue(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  };

  const filteredData = data.filter((row) => {
    const nameMatch = row.fullName
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const planMatch = planValue === "All" || row.plan === planValue;
    const statusMatch = statusValue === "All" || row.status === statusValue;
    return nameMatch && planMatch && statusMatch;
  });

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="font-bold">
          Franchise List
        </Typography>
        <div className="flex gap-4">
          <Button
            variant="contained"
            color="primary"
            className="px-4 py-2 rounded-md"
          >
            <DownloadIcon /> Export
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="px-4 py-2 rounded-md"
          >
            <SearchIcon /> Filter
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <TextField
            label="ID"
            variant="outlined"
            className="w-48"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Full Name"
            variant="outlined"
            className="w-48"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Franchise Name"
            variant="outlined"
            className="w-48"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            className="w-48"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex gap-4">
          <Select
            labelId="plan-select-label"
            id="plan-select"
            value={planValue}
            onChange={handlePlanChange}
            className="w-32"
            label="Plan"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pro">Pro</MenuItem>
            <MenuItem value="Basic">Basic</MenuItem>
          </Select>
          <Select
            labelId="status-select-label"
            id="status-select"
            value={statusValue}
            onChange={handleStatusChange}
            className="w-32"
            label="Status"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          variant="contained"
          className="px-4 py-2 rounded-md"
          onClick={() => {
            setSearchValue("");
            setPlanValue("All");
            setStatusValue("All");
          }}
        >
          Clear all
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="ml-4 px-4 py-2 rounded-md"
        >
          Show Results
        </Button>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default FranchiseTable;
