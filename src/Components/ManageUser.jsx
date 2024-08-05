import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
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
  const [rows, setRows] = useState([
    // { id: 1, name: 'Snow', age: 35, full_name: 'Jon Snow', franchise: 'KFC', email: 'jonsnow@gmail.com', last_login: '12-Oct-2024 10:34:09', plan: 'Basic', status: 'Active' },
    // { id: 2, name: 'Lannister', age: 42, full_name: 'Cersei Lannister', franchise: 'Google', email: 'cerseilan@gmail.com', last_login: '12-Oct-2024 10:34:09', plan: 'Pro', status: 'Active' },
    // { id: 3, name: 'Stark', age: 26, full_name: 'Arya Stark', franchise: 'Under 500', email: 'aryastark@gmail.com', last_login: '-', plan: 'Basic', status: 'Active' },
    // { id: 4, name: 'Targaryen', age: 30, full_name: 'Daenerys Targaryen', franchise: 'Fume', email: 'daenerys@gmail.com', last_login: '-', plan: 'Basic', status: 'Active' },
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
    <div className="bg-gray-50 p-4 rounded-lg shadow-md h-screen w-full ml-auto flex-1">
      <div className="flex justify-between items-center  my-9">
        <h2 className="text-2xl font-bold">Manage User</h2>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          + Add Franchisor
        </Button>
      </div>

      <div className="bg-[#FAFBFA] p-4 rounded-lg">
        <ul className="flex  border-b gap-8">
          <li className=" pb-3 text-center border-b-2 border-blue-500 font-bold">
            Franchisor
          </li>
          <li className=" text-center">Franchisee</li>
          <li className=" text-center">Sales</li>
        </ul>
        <div className="grid grid-cols-3 gap-4 my-3">
          <div className="bg-white border shadow p-3 rounded-lg">
            <Typography variant="h6" className="font-bold mb-2 text-gray-500">
              Total Franchisor
            </Typography>
            <Typography variant="h4" className="font-bold">
              {rows.length}
            </Typography>
          </div>
          <div className="bg-white border shadow p-5 rounded-lg">
            <Typography variant="h6" className="font-bold mb-2 text-gray-500">
              Pro Plan
            </Typography>
            <Typography variant="h4" className="font-bold">
              {rows.filter((row) => row.plan === "Pro").length}
            </Typography>
          </div>
          <div className="bg-white border shadow p-3 rounded-lg">
            <Typography variant="h6" className="font-bold mb-2 text-gray-500">
              Basic Plan
            </Typography>
            <Typography variant="h4" className="font-bold">
              {rows.filter((row) => row.plan === "Basic").length}
            </Typography>
          </div>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          onSelectionModelChange={handleRowSelection}
        />
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Add New Franchisor</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="full_name"
                  value={newFranchisee.full_name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Franchise Name"
                  name="franchise"
                  value={newFranchisee.franchise}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  name="email"
                  value={newFranchisee.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Last Login"
                  name="last_login"
                  value={newFranchisee.last_login}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Plan"
                  name="plan"
                  select
                  value={newFranchisee.plan}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  <option value="Basic">Basic</option>
                  <option value="Pro">Pro</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Status"
                  name="status"
                  select
                  value={newFranchisee.status}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Franchisor
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ManageUser;
